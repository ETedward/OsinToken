pragma solidity >=0.4.22 <0.9.0;

contract Token {

    struct Article {
        address writer;
        string url;
    }

    string public constant name = "Bellingcoin";
    uint public constant seconds_for_nominations = 172800;
    uint public constant seconds_for_voting = 432000;
    uint public startTime;
    address public owner;

    mapping(address => uint16) public goveranceBalance;
    uint16 public goveranceSupply;

    mapping(address => uint16) public rewardBalance;
    uint16 public rewardSupply;

    Article[] public winners;

    Article[] public nominees;
    // number of nominations made by each address
    address[] nominators;
    mapping(address => uint16) nominationsMade;
    // number of votes cast by each address
    address[] voters;
    mapping(address => uint16) votesCast;
    // cumulative votes for each nominee
    uint16[] public voteCounts;

    constructor(uint16 _supply, uint _start) public {
        owner = msg.sender;
        goveranceSupply = _supply;
        goveranceBalance[msg.sender] = _supply;
        startTime = _start;
        rewardSupply = 0;
    }

    event Nominate(address indexed _nominator, address indexed _writer, string _url);
    event Vote(address indexed _voter, string _url, uint16 _value);
    event Transfer_Goverance(address indexed _from, address indexed _to, uint16 _value);
    event Transfer_Reward(address indexed _from, address indexed _to, uint16 _value);
    event Winner(address indexed _writer, string _url);

    function setStartTime(uint _time) public returns (bool) {
        require(msg.sender == owner);
        startTime = _time;
        return true;
    }

    function nomineesWriter(uint _index) public view returns (address) {
        return nominees[_index].writer;
    }

    function nomineesUrl(uint _index) public view returns (string memory) {
        return nominees[_index].url;
    }

    function nomineesLength() public view returns (uint) {
        return nominees.length;
    }

    function winnersWriter(uint _index) public view returns (address) {
        return winners[_index].writer;
    }

    function winnersUrl(uint _index) public view returns (string memory) {
        return winners[_index].url;
    }

    function winnersLength() public view returns (uint) {
        return winners.length;
    }

    function votingEnds() public view returns (uint) {
        return startTime + seconds_for_nominations + seconds_for_voting;
    }

    function votesRemaining(address _voter) public view returns (uint16) {
        return goveranceBalance[_voter] + rewardBalance[_voter] - votesCast[_voter];
    }

    function submitNomination(address _writer, string calldata _url) public returns (bool) {
        require(nominationsMade[msg.sender] < goveranceBalance[msg.sender], "too many nominations");
        require(block.timestamp > startTime, "too early");
        require(block.timestamp <= startTime + seconds_for_nominations, "too late");
        require(!alreadyNominated(_url), "already nominate");

        nominationsMade[msg.sender] += 1;
        nominees.push(Article(_writer, _url));
        nominators.push(msg.sender);
        voteCounts.push();

        emit Nominate(msg.sender, _writer, _url);
        return true;
    }

    function castVotes(uint _index, uint16 _value) public returns (bool) {
        require(votesRemaining(msg.sender) >= _value, "too few remaining");
        require(_index < nominees.length, "invalid nominee");
        require(block.timestamp > startTime + seconds_for_nominations, "too early");
        require(block.timestamp <= startTime + seconds_for_nominations + seconds_for_voting, "too late");

        votesCast[msg.sender] += _value;
        voteCounts[_index] += _value;
        voters.push(msg.sender);

        emit Vote(msg.sender, nominees[_index].url, _value);
        return true;
    }

    function transferGoverance(address _to, uint16 _value) public returns (bool) {
        require(votesRemaining(msg.sender) >= _value, "too few remaining");

        goveranceBalance[msg.sender] -= _value;
        goveranceBalance[_to] += _value;

        emit Transfer_Goverance(msg.sender, _to, _value);
        return true;
    }

    function transferReward(address _to, uint16 _value) public returns (bool) {
        require(votesRemaining(msg.sender) >= _value, "too few remaining");

        rewardBalance[msg.sender] -= _value;
        rewardBalance[_to] += _value;

        emit Transfer_Reward(msg.sender, _to, _value);
        return true;
    }

    function updateWinner() public returns (bool) {
        if (block.timestamp > startTime + seconds_for_nominations + seconds_for_voting) {
            if (nominees.length > 0) {
                uint index = 0;
                for (uint i = 1; i < nominees.length; i++) {
                    if (voteCounts[i] > voteCounts[index]) {
                        index = i;
                    }
                }
                Article memory winner = nominees[index];

                winners.push(winner);
                rewardBalance[winner.writer] += 1;
                rewardSupply += 1;
                emit Winner(winner.writer, winner.url); 
            }
           
            resetVoting();
            return true;
        }
        return false;
    }

    function resetVoting() private {
        delete nominees;

        for (uint i = 0; i < nominators.length; i++) {
            delete nominationsMade[nominators[i]];
        }
        delete nominators;

        for (uint i = 0; i < voters.length; i++) {
            delete votesCast[voters[i]];
        }
        delete voters;

        delete voteCounts;

        startTime += seconds_for_nominations + seconds_for_voting;
    }

    function alreadyNominated(string calldata _url) private view returns (bool) {
        bytes32 hashVal = keccak256(bytes(_url));
        for (uint i = 0; i < nominees.length; i++) {
            if (hashVal == keccak256(bytes(nominees[i].url))) {
                return true;
            }
        }
        return false;
    }
    
}
