import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class="container">
					<div class="row">
						<div class="col w-3 left">
							<div class="logo">
								<a href="/">
									<img src="https://thedevdrawer.com/assets/img/logo-header.png" alt="TheDevDrawer logo" />
								</a>
							</div>
						</div>
						<div class="col w-9">
							<div id="menu">
								<button type="button" id="menu-btn">
									Menu
								</button>
							</div>
							<nav id="nav">
								<ul>
									<li>
										<NavLink to="/" exact activeClassName="active">
											Home
										</NavLink>
									</li>
									<li>
										<NavLink to="/about" activeClassName="active">About</NavLink>
									</li>
									<li>
										<NavLink to="/contact" activeClassName="active">Contact</NavLink>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
