import React from 'react';
import { Link } from 'react-router-dom';
import pict1 from "../images/picture1.jpg";
import pict2 from "../images/picture2.jpg";
import pict3 from "../images/picture3.png";

// import '../css/main.css';

function Home() {
  return (
    <div className = "home">
        <div className="page-wrapper">
					{/* <header id="header" className="alt">
						<h1><a href="index.html">Bellingcoin</a></h1>
						<nav>
							<a href="#menu">Menu</a>
						</nav>
					</header> */}

					{/* <nav id="menu">
						<div className="inner">
							<h2>Menu</h2>
							<p id='userWallet' className='text-lg text-gray-600 my-2'>testing</p>
							<ul className="links">
								<li><a href="index.html">Home</a></li>
								<li><a href="news.html">News & Rewards</a></li>
								<li><a href="people.html">People</a></li>
								<li><a id = 'votingID' href="howto.html">How To</a></li>
								<li><button id='loginButton' onclick="" className="mx-auto rounded-md p-2 bg-purple-500 text-white">Log In Metamask</button></li>
							</ul>
							<a href="#" className="close">Close</a>
						</div>
					</nav> */}

				{/* <!-- Banner --> */}
					<section id="banner">
						<div className="inner">
							{/* <div className="logo"><span className="icon fa-gem"></span></div> */}
							<h2>This is Bellingcoin</h2>
							<p>Ethereum Token Powered By and Rewarding the OSINT community</p>
						</div>
					</section>

				{/* <!-- Wrapper --> */}
					<section id="wrapper">

						{/* <!-- One --> */}
							<section id="one" className="wrapper spotlight style1">
								<div className="inner">
									<a className="image"><img src={pict1} alt="" /></a>
									<div className="content">
										<h2 className="major">What is Bellingcoin?</h2>
										<p> We're like the Pulitzers for open source investigations — except awards are decided and voted by the community. In technical jargon, Bellingcoin is an Ethereum token written to ERC-20 standards, with voting implemented like a DAO. In practical terms, you vote for your favorite investigation of the week; if the piece wins, the author gets an NFT, and you get to win one. </p>
										<a href="/#" className="special">Read Our White Paper Here</a>
									</div>
								</div>
							</section>

						{/* <!-- Two --> */}
							<section id="two" className="wrapper alt spotlight style2">
								<div className="inner">
									<a className="image"><img src={pict2} alt="" /></a>
									<div className="content">
										<h2 className="major">Expert Curated Decisions</h2>
										<p> Coins in the Bellingcoin project are divided into governence tokens and regular tokens. Governence tokens are initially distributed to vetted experts among the 
											OSINT community, including NYT visual investigator <b><Link to='//nytimes.com/by/muyi-xiao'> Muyi Xiao </Link> </b>, BBC journalist <b><Link to='//twitter.com/yaolri'> Aliaume Leroy </Link></b>, and Center for Information Reslience Director 
											<b><Link to='//twitter.com/BenDoBrown'> Benjamin Strick </Link> </b>, who have committed to trying this project at launch. 
											Every week, these experts in their field collectively will provide a curated shortlist of the best OSI projects for the community to browse and vote on.
											 </p>
										<a href="/#" className="special"> Join our Experts</a>
									</div>
								</div>
							</section>

						{/* <!-- Three --> */}
							<section id="three" className="wrapper spotlight style3">
								<div className="inner">
									<a className="image"><img src={pict3} alt="" /></a>
									<div className="content">
										<h2 className="major">Exclusive NFT Rewards</h2>
										<p> After the voting period ends, the results — winning author and article — are stored forever on the blockchain. 
											The voting process also mints a new token that is linked to the week of voting and winning article,
											and has its ownership continuously updated on the blockchain, serving as a unique NFT tied to a piece of investigative journalism. 
											These Bellingcoin and NFT rewards are distributed to the author and voters according to our reward structures.  </p>
										<a href="/awards" className="special">Learn more</a>
									</div>
								</div>
							</section>

						{/* <!-- Four --> */}
							<section id="four" className="wrapper alt style1">
								<div className="inner">
									<h2 className="major">Winning articles</h2>
									<p>Our most recent past winning investigations, stored permananently on the blockchain.</p>
									<section className="features">
										<article>
											{/* <a href="/#" className="image"><img src={pict1} alt="" /></a> */}
											<h3 className="major">Into the Hateverse</h3>
											COVID-19 conspiracy theories are spreading online like a virus. An inside look at a dangerous misinformation movement that’s spilling into the real world...
											<br></br> <br></br>	
											<p>Author: Edward Tian <br></br>
											Publication: Toronto Star <br></br>
											Proposed Date: Apr 1, 2022
											</p>
											<a className="special"> <b><Link to='//www.thestar.com/news/investigations/2021/07/22/how-covid-19-conspiracy-theories-are-spreading-online-like-a-virus.html'> Read Article </Link></b></a>
										</article>
										<article>
											{/* <a href="/#" className="image"><img src="images/pic06.jpg" alt="" /></a> */}
											<h3 className="major"> The Nalvany Poisoner</h3>
											<p> Investigation reveals new voluminous telecom and travel data that implicates Russia Federal Security Service (FSB) in the poisoning of the prominent Russian opposition politician Alexey Navalny...
											<br></br> <br></br>
											Author: Bellingcat Investigations Team <br></br>
											Publication: Bellingcat <br></br>
											Proposed Date: Apr 8, 2022
											</p>
											<a className="special"><b><Link to='//www.bellingcat.com/news/uk-and-europe/2020/12/14/fsb-team-of-chemical-weapon-experts-implicated-in-alexey-navalny-novichok-poisoning/'> Read Article </Link></b>
											</a>
										</article>
										<article>
											{/* <a href="/#" className="image"><img src={pict1} alt="" /></a> */}
											<h3 className="major">Graves of Mariupol</h3>
											Tens of thousands in ruined city of Mariupol in Ukraine are in dire need of assistance...
											<br></br> <br></br>	
											<p>Author: Christiaan Triebert <br></br>
											Publication: New York Times <br></br>
											Proposed Date: Apr 15, 2022
											</p>
											<a className="special"> <b><Link to='//www.thestar.com/news/investigations/2021/07/22/how-covid-19-conspiracy-theories-are-spreading-online-like-a-virus.html'> Read Article </Link></b></a>
										</article>
					
										<article>
											{/* <a href="/#" className="image"><img src={pict1} alt="" /></a> */}
											<h3 className="major">Crypto SuperPAC</h3>
											Crypto PAC throws in $1 million to back Ohio Rep. Shontel Brown over Nina Turner...
											<br></br> <br></br>	
											<p>Author: Ryan Grim <br></br>
											Publication: The Intercept <br></br>
											Proposed Date: Apr 22, 2022
											</p>
											<a className="special"> <b><Link to='//www.thestar.com/news/investigations/2021/07/22/how-covid-19-conspiracy-theories-are-spreading-online-like-a-virus.html'> Read Article </Link></b></a>
										</article>										
									</section>
									<ul className="actions">
										<li><a href="/#" className="button">Vote Now</a></li>
									</ul>
								</div>
							</section>

					</section>

				{/* <!-- Footer --> */}
					<section id="footer">
						<div className="inner">
							<h2 className="major">Get in touch</h2>
							<p>Sharing knowledge is core to the ethos of the OSINT community, and to Bellingcoin. 
								Please reach out for any help in being onboarded to this new technology, or join our discord server for a likeminded community. If you're already an established OSINT expert, and interested in becoming a Bellingcoin governor, send us an email too. If we know your work, we'll give you a governence token.</p>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label for="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div className="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="4"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
							<ul className="contact">
								
								<li className="icon brands fa-twitter"><a href="/#">twitter.com/bellingcoin</a></li>
								<li className="icon brands fa-discord"><a href="/#">discord.com/bellingcoin</a></li>
								<li className="icon solid fa-home">
									Developed in Princeton University<br />
									@ 312 Brown Hall<br />
									Princeton, NJ, USA, 08544
								</li>
							</ul>
							<ul className="copyright">
								<li>&copy; Ape Invest Inc. All rights reserved.</li>
							</ul>
						</div>
					</section>
			</div>
    </div>
  );
}

export default Home;