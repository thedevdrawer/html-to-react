import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
