import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./centegytechnologies-logo.png"
								alt="Centegy_Technologies"
								className="work-image"
							/>
							<div className="work-title">Centegy Technologies</div>
							<div className="work-subtitle">
								Junior Java Developer
							</div>
							<div className="work-duration">January 2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="./sudoware-logo.jpg"
								alt="Sudoware"
								className="work-image"
							/>
							<div className="work-title">Sudoware</div>
							<div className="work-subtitle">
								Junior Java Developer
							</div>
							<div className="work-duration">June 2023 - December 2023</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
