import React, { Component } from "react";

class ResumeEmbed extends Component {
    render () {
        return (
            <div className="resume-window">
                <embed src="ApplicationResume.pdf" type="application/pdf" width="100%" height="100%"/>
            </div>
        )
    }
}

export default ResumeEmbed;