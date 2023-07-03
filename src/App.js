import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import Blog from "./components/blog";
import Functions from "./components/functions";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
	return (
		<BrowserRouter>
			<header>
				{/* navbar */}
				<nav className="navbar">
					<div className="land-nav-a">
						<Link to="/">Home</Link>
						<Link to="/blog">Blog</Link>
						<Link to="/functions">Functions</Link>
						<Link to="/about">About</Link>
					</div>

					<div className="land-nav-b">
						<Link to="/contact">Contact</Link>
					</div>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/functions" element={<Functions />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<footer></footer>
			</main>
		</BrowserRouter>
	);
}

export default App;
