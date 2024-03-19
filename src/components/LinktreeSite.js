/*  NEEDED */
import { useState, useEffect } from "react"
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

//

export const LinktreeSite = () => {
    return (
        <div className="linktree-container">
            {/* Add your links here */}
            <a href="https://ko-fi.com/yourcsgirlie" className="buttonStyle">Resume Template</a>
            <a href="https://ko-fi.com/yourcsgirlie">Guide to Web Development</a>
            <a href="https://ko-fi.com/yourcsgirlie">Buy Me a Coffee?</a>
        </div>
    )
}