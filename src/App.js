import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import Blog from "./components/blog";

function App() {
	return (
		<BrowserRouter>
			<header>
				{/* navbar */}
				<nav className="navbar">
					<div className="land-nav-a">
						<Link to="/">Home</Link>
						<Link to="/blog">Blog</Link>
						<Link to="#">Functions</Link>
						<Link to="#">About</Link>
					</div>

					<div className="land-nav-b">
						<a href="#">Contact</a>
					</div>
				</nav>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>

				<footer></footer>
			</main>
		</BrowserRouter>
	);
}

export default App;
