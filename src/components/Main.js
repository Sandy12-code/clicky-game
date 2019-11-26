import React from "react";
import "./main.css"
const Main = props => (

			<div onClick={() => props.setClicked(props.id)} className="main col-md-12">
				<div className="img-container">
					<img className="pics" alt={props.name} src={props.image} />
				</div>
			</div>
);

export default Main;