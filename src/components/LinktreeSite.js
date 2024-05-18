/*  NEEDED */
import { useState, useEffect } from "react"
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

//
import profilepic2 from '../assets/img/profilepic2.jpg';


export const LinktreeSite = () => {
    return (
        <div className="linktree-container">
            {/* Add your links here */}
            <img src={profilepic2} className="myImage" />
            <h1 className="IGat">@yourCSgirlie</h1>
            <h2 className="myRoles">iOS Mobile App Developer | Test Engineer | Web Developer | Researcher </h2>
            <a href="https://docs.google.com/document/d/13EHjqEDUue66Ka25F4C4WICOE0SYxOc08TkMjlt27nM/edit" className="buttonStyle">Resume Template</a>
            <a href="" className="buttonStyle">Guide to Web Development [Coming Soon!]</a>
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Buy Me a Coffee?</a>
        </div>
    )
}