import React from "react";

import { Fade } from "react-reveal";

import "./style.css";

export const Post = ({ author, title }) => (
  <Fade up>
    <div className="post">
      <div className="post-user">
        <div className="post-avatar"></div>
        <div className="post-author">{author}</div>
      </div>
      <div className="post-img"></div>
      <div className="post-details">
        <p className="post-title">{title}</p>
      </div>
    </div>
  </Fade>
);
