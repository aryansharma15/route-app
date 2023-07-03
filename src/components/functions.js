import React from "react";
import bootstrap from "bootstrap";

function Functions() {
	return (
		<div className="funcs">
			<div id="carouselExampleIndicators" className="carousel slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
							className="d-block w-100"
							alt="dog"
							width="200px"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							className="d-block w-100"
							alt="two dogs"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images.unsplash.com/photo-1556866261-8763a7662333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
							className="d-block w-100"
							alt="four dogs"
						/>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default Functions;
