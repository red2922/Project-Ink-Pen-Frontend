import React from "react";
import PostObject from "../entities/PostObject";

interface PostObjectProp {
  postObject: PostObject;
}

const Post: React.FC<PostObjectProp> = ({ postObject }) => {
  return (
    <>
      <div className="flex flex-col items-center w-36 h-36 border-4 border-indigo-500">
        <h1>{postObject.id}</h1>
        <img src={postObject.imageUrl} className="object-contain" />
        <div className="flex justify-between w-100">
          <div>{postObject.tips}</div>
          <div>{postObject.likes}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
