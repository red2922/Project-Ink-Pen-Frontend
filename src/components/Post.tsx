import React from "react";
import PostObject from "../entities/PostObject";

interface PostObjectProp {
  postObject: PostObject;
}

const Post: React.FC<PostObjectProp> = ({ postObject }) => {
  return (
    <>
      <div>{postObject.id}</div>
      <img src={postObject.imageUrl} />
    </>
  );
};

export default Post;
