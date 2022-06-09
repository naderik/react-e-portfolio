import React from "react";

function ProjectItem({ image, name, id, github, skills }) {
    const handleClick = () => {
        window.location.replace(github);
    };
    return (
        <div
            className="projectItem"
            onClick={() => {
                handleClick();
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
            <h2>Skills: {skills}</h2>
        </div>
    );
}

export default ProjectItem;