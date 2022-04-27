pragma solidity >=0.4.22 <0.9.0;

contract Token {

    struct Article {
        address writer;
        string url;
    }

    string public constant name = "Bellingcoin";
    uint public constant seconds_for_nominations = 172800;
    uint public constant seconds_for_voting = 432000;
    uint public start_time;
    bool public voting_open;

    mapping(address => uint16) public goverance_balance;
    uint16 public goverance_supply;

    mapping(address => uint16) public reward_balance;
    uint16 public reward_supply;

    Article[] public winners;

    Article[] public nominees;
    // number of nominations made by each address
    address[] nominators;
    mapping(address => uint16) nominations_made;
    // number of votes cast by each address for each nominee
    address[] voters;
    mapping(address => uint16[]) votes_cast;
    // cumulative votes for each nominee
    uint16[] public vote_counts;

    constructor(uint16 _supply, uint _start) public {
        goverance_supply = _supply;
        goverance_balance[msg.sender] = _supply;
        start_time = _start;
        reward_supply = 0;
    }

    event Nominate(address indexed _nominator, address indexed _writer, string _url);
    event Vote(address indexed _voter, string _url, uint16 _value);
    event Transfer_Goverance(address indexed _from, address indexed _to, uint16 _value);
    event Transfer_Reward(address indexed _from, address indexed _to, uint16 _value);
    event Winner(address indexed _writer, string _url);

    function nomineeWriter(uint16 _index) public view returns (address) {
        return nominees[_index].writer;
    }

    function nomineeUrl(uint16 _index) public view returns (string memory) {
        return nominees[_index].url;
    }

    function votingEnds() public view returns (uint) {
        return start_time + seconds_for_nominations + seconds_for_voting;
    }

    function votesRemaining(address _voter) public view returns (uint16) {
        uint16 cast = 0;
        for (uint16 i = 0; i < nominees.length; i++) {
            cast += votes_cast[_voter][i];
        }
        return goverance_balance[_voter] + reward_balance[_voter] - cast;
    }

    function submitNomination(address _writer, string calldata _url) public returns (bool) {
        require(nominations_made[msg.sender] < goverance_balance[msg.sender]);
        require(block.timestamp > start_time);
        require(block.timestamp <= start_time + seconds_for_nominations);
        require(!alreadyNominated(_url));

        nominations_made[msg.sender] += 1;
        nominees.push(Article(_writer, _url));
        nominators.push(msg.sender);

        emit Nominate(msg.sender, _writer, _url);
        return true;
    }

    function castVotes(uint16 _index, uint16 _value) public returns (bool) {
        require(votesRemaining(msg.sender) >= _value);
        require(block.timestamp > start_time + seconds_for_nominations);
        require(block.timestamp <= start_time + seconds_for_nominations + seconds_for_voting);

        votes_cast[msg.sender][_index] += _value;
        vote_counts[_index] += _value;
        voters.push(msg.sender);

        emit Vote(msg.sender, nominees[_index].url, _value);
        return true;
    }

    function transferGoverance(address _to, uint16 _value) public returns (bool) {
        require(votesRemaining(msg.sender) >= _value);

        goverance_balance[msg.sender] -= _value;
        goverance_balance[_to] += _value;

        emit Transfer_Goverance(msg.sender, _to, _value);
        return true;
    }

    function transferReward(address _to, uint16 _value) public returns (bool) {
        require(votesRemaining(msg.sender) >= _value);

        reward_balance[msg.sender] -= _value;
        reward_balance[_to] += _value;

        emit Transfer_Reward(msg.sender, _to, _value);
        return true;
    }

    function updateWinner() public returns (bool) {
        if (block.timestamp > start_time + seconds_for_nominations + seconds_for_voting) {
            if (nominees.length > 0) {
                uint16 index = 0;
                for (uint16 i = 1; i < nominees.length; i++) {
                    if (vote_counts[i] > vote_counts[index]) {
                        index = i;
                    }
                }
                Article memory winner = nominees[index];

                winners.push(winner);
                reward_balance[winner.writer] += 1;
                emit Winner(winner.writer, winner.url);
            }
           
            resetVoting();
            return true;
        }
        return false;
    }

    function resetVoting() private {
        delete nominees;

        for (uint16 i = 0; i < nominators.length; i++) {
            delete nominations_made[nominators[i]];
        }
        delete nominators;

        for (uint16 i = 0; i < voters.length; i++) {
            delete votes_cast[voters[i]];
        }
        delete voters;

        delete vote_counts;

        start_time += seconds_for_nominations + seconds_for_voting;
    }

    function alreadyNominated(string calldata _url) private view returns (bool) {
        bytes32 hashVal = keccak256(bytes(_url));
        for (uint16 i = 0; i < nominees.length; i++) {
            if (hashVal == keccak256(bytes(nominees[i].url))) {
                return true;
            }
        }
        return false;
    }
    
}
