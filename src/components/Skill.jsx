import React from "react";

const Skill = ({ name, Icon, color }) => {
	return (
		<div
			className="progress-card text-center "
			style={{ backgroundColor: "transparent" }}
		>
			<div className="icon">
				<Icon style={{ fontSize: "50px" }} color={color} />
			</div>
			<br />
			<span className="text-sm">{name}</span>
		</div>
	);
};

export default Skill;
