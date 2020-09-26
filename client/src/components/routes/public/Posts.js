import React from "react";

import "./style.css";

import { Post } from "../../utils/post";

const Posts = () => {
  return (
    <div className="page posts">
      <Post author="Dougie Hawes" title="My fun day in Cambridge" />
      <Post author="Orson Gilvary" title="Why I love MineCraft" />
      <Post author="Ryan Gilvary" title="Why John is  Crossiant" />
    </div>
  );
};

export default Posts;
