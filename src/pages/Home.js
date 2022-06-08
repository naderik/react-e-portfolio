import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hello, I'm Kasra !
                </h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating.</p>
                    <a href='https://linkedin.com/in/naderik' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    <a href='mailto:naderi.kasra@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
                    <a href='https://github.com/naderik' target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                </div>
            </div>
        </div>
    );
}

export default Home;