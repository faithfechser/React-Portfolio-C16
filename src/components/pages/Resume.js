import React from 'react';
import resumePDF from './assets/Faith-Fechser-Resume.pdf';

function Resume() {
    return (
        <div className="pageContainer">
            <img className="resumePDF" alt="resume" src="./assets/FaithFechserResume.png"></img>
            <a className="resumeDownload" target="_blank" href={resumePDF}>Download</a>
        </div>
    )
}

export default Resume