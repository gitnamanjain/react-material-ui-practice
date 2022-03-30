import React from "react";
import "./Banner.css";
function Banner() {
    return (
        <div className="banner">
            <div className="firstHeading">
                <p>Title of a longer featured blog post</p>
            </div>
            <div>
                <p className="secondHeading">
                    Multiple lines of text that form the lede, informing new
                    readers quickly and efficiently about what's most
                    interesting in this post's contents
                </p>
            </div>
            <a href="#">Continue reading...</a>
        </div>
    );
}

export default Banner;
