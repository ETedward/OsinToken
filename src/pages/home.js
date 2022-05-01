import React from 'react';
import { Link } from 'react-router-dom';

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
									<a href="/#" className="image"><img src="images/pic01.jpg" alt="" /></a>
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
									<a href="/#" className="image"><img src="images/pic02.jpg" alt="" /></a>
									<div className="content">
										<h2 className="major">Expert Curated Decisions</h2>
										<p> Coins in the Bellingcoin project are divided into governence tokens and regular tokens. Governence tokens are initially distributed to vetted experts among the 
											OSINT community, including NYT visual investigator <b><Link to='//nytimes.com/by/muyi-xiao'> Muyi Xiao </Link> </b>, BBC journalist <b><Link to='//twitter.com/yaolri'> Alliume Leroy </Link></b>, and Center for Information Reslience Director 
											<b><Link to='//twitter.com/BenDoBrown'> Benjamin Strick </Link> </b>, who have all verbally agreed to try out this project at launch. 
											Every week, these experts in their field collective provide a curated shortlist of the best OSI projects for the community to browse and vote on.
											 </p>
										<a href="/#" className="special"> Join our Experts</a>
									</div>
								</div>
							</section>

						{/* <!-- Three --> */}
							<section id="three" className="wrapper spotlight style3">
								<div className="inner">
									<a href="/www.twitter.com" className="image"><img src="images/pic03.jpg" alt="" /></a>
									<div className="content">
										<h2 className="major">Exclusive NFT Rewards</h2>
										<p> After the voting period ends, the results — winning author and article — are stored forever on the blockchain. 
											The voting process also mints a new token that is linked to the week of voting and winning article,
											and has its ownership continuously updated on the blockchain, serving as a unique NFT tied to an investigation. 
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
											<a href="/#" className="image"><img src="images/pic04.jpg" alt="" /></a>
											<h3 className="major">Into the Hateverse</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="/#" className="special">Learn more</a>
										</article>
										<article>
											<a href="/#" className="image"><img src="images/pic05.jpg" alt="" /></a>
											<h3 className="major">Into Inner Mongolia</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="/#" className="special">Learn more</a>
										</article>
										<article>
											<a href="/#" className="image"><img src="images/pic06.jpg" alt="" /></a>
											<h3 className="major">The Nalvany Poisoner</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="/#" className="special">Learn more</a>
										</article>
										<article>
											<a href="/#" className="image"><img src="images/pic07.jpg" alt="" /></a>
											<h3 className="major">Myanmar's Forever War</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
											<a href="/#" className="special">Learn more</a>
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