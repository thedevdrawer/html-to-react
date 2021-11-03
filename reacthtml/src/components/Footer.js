import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<p class="text-center hidden-sm">
					<Link to="/" exact>
						Home
					</Link>{" "}
					| <Link to="/about">About</Link> |{" "}
					<Link to="/contact">Contact</Link>
				</p>
				<p class="text-center">Fake Copyright 2021 &copy; The Dev Drawer</p>
			</footer>
		);
	}
}

export default Footer;
