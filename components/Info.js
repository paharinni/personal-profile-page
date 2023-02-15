import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="info--image" src="./images/profile_picture.jpg" />
            <h1>Serhii Pakharenko</h1>
            <h3 className="info--position">Full-Stack .NET Developer</h3>
            <h5>Looking for a job</h5>
            <div className="info--buttons">
                <a className="info--left--btn" href="mailto:pakharenkobusiness@gmail.com" target="_blank">
                    <img src="./images/email_logo.png"/>
                    <h3>Email</h3>
                </a>
                <a className="info--right--btn" href="https://www.linkedin.com/in/serhii-pakharenko" target="_blank">
                    <img src="./images/linkedin_logo.png"/>
                    <h3>LinkedIn</h3>
                </a>
            </div>
        </div>
    )
}