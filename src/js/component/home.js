import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	const [color, setColor] = useState("");
	return (
		<div className="box">
			<div className="traffic-light">
				<div
					onClick={() => setColor("red")}
					className={`light red ${
						color === "red" ? "glow" : ""
					}`}></div>

				<div
					onClick={() => setColor("yellow")}
					className={`light yellow ${
						color === "yellow" ? "glow" : ""
					}`}></div>
				<div
					onClick={() => setColor("green")}
					className={`light green ${
						color === "green" ? "glow" : ""
					}`}></div>
			</div>
		</div>
	);
}
