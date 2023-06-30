import React from "react";
import "../App.css";

function Blog() {
	return (
		<div>
			<div className="card-div">
				{/* cards */}
				<div class="card" style={{ width: "18rem" }}>
					<img class="card-img-top" src="..." alt="Card image cap" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">
							Button S
						</a>
					</div>
				</div>

				<div class="card" style={{ width: "18rem" }}>
					<img class="card-img-top" src="..." alt="Card image cap" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">
							Button A
						</a>
					</div>
				</div>

				<div class="card" style={{ width: "18rem" }}>
					<img class="card-img-top" src="..." alt="Card image cap" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">
							Button B
						</a>
					</div>
				</div>

				<div class="card" style={{ width: "18rem" }}>
					<img class="card-img-top" src="..." alt="Card image cap" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">
							Button C
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
