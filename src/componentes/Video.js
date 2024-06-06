import React from "react";
import './Video.css';

function Video() {
    return (
        <video autoPlay loop muted className="video">
            <source src="/videoback.mp4" type="video/mp4" />
        </video>

    );
}

export default Video;