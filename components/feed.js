// import useContext to get shared data.
import { useState, useEffect } from "react";
// import Context from "../Context";
import React from "react";
import Post from "./Post";

export default function Feed({ posts }) {
  const [feedPosts, setFeedPosts] = useState([]);
  useEffect(() => {
    if (posts && posts.length !== 0) {
      setFeedPosts(posts);
    }
  });
  return (
    <div>
      {feedPosts.map((post) => (
        <Post
          key={post.id}
          createdBy={post.createdBy}
          message={post.message}
          timestamp={post.timestamp}
          imageUrl={post.imageUrl}
          userAvatar={post.userAvatar}
        />
      ))}
    </div>
  );
}
