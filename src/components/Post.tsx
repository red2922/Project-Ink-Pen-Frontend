import React from "react";

interface PostObject {
  id: number;
  //title: string;
  //userId: number;
  //tips: number;
  //likes: number;
  imageUrl: string;
  //createdDate: string;
}

const Post: React.FC<PostObject> = ({ id, imageUrl }) => {
  return (
    <>
      <div>{id}</div>
      <img src={imageUrl} />
    </>
  );
};

export default Post;
