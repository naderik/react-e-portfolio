import React from "react";

function ProjectItem({ image, name, id, github }) {
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
        </div>
    );
}

export default ProjectItem;