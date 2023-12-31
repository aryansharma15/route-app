// import bootstrap from 'bootstrap'
import React from "react";
import "../App.css";

function Landing() {
	return (
		<div className="land">
			<h1>Welcome to AbXYZ!</h1>

			<div className="card-div">
				{/* cards */}
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt="balloons image"
					/>
					<div className="card-body">
						<h5 className="card-title">First Card</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">
							Button S
						</a>
					</div>
				</div>

				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt="playstation video game"
					/>
					<div className="card-body">
						<h5 className="card-title">Second Card</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">
							Button A
						</a>
					</div>
				</div>

				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt="reading book tea"
					/>
					<div className="card-body">
						<h5 className="card-title">Third Card</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">
							Button B
						</a>
					</div>
				</div>

				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://images.unsplash.com/photo-1567351344506-b2e8a94e273b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						alt="fireworks"
					/>
					<div className="card-body">
						<h5 className="card-title">Fourth Card</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">
							Button C
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
