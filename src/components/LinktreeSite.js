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
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Resume Template</a>
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Guide to Web Development</a>
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Buy Me a Coffee?</a>
        </div>
    )
}