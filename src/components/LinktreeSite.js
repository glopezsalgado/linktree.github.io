/*  NEEDED */
import { useState, useEffect } from "react"
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

//
import profilePic from '../assets/img/yourcsgirliepic.jpg';


export const LinktreeSite = () => {
    return (
        <div className="linktree-container">
            {/* Add your links here */}
            <img src={profilePic} className="myImage" />
            <h1 className="IGat">@yourCSgirlie</h1>
            <h2>iOS Mobile App Developer | Test Engineer | Web Developer | Researcher </h2>
            <a href="https://docs.google.com/document/d/13EHjqEDUue66Ka25F4C4WICOE0SYxOc08TkMjlt27nM/edit" className="buttonStyle">Resume Template</a>
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Guide to Web Development</a>
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Buy Me a Coffee?</a>
        </div>
    )
}