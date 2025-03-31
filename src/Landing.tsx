import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post";
import PostObject from "./entities/PostObject";

function Landing() {
  const [data, setData] = useState();
  const postObject: PostObject = {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-vector/fresh-pumpkin-white-b_1308-39708.jpg?t=st=1742357720~exp=1742361320~hmac=f7b4868b50872aeb05a4d3cb406ea02f3c4b32b7ad194449aba769105b982828&w=1060",
    tips: 0,
    likes: 0
  };

  useEffect(() => {
    test();
  }, []);

  const test = () => {
    axios.get(`http://localhost:8080/api/customer/jake`).then((res) => {
      const persons = res.data;
      console.log(persons);
      setData(persons);
    });
  };

  return (
    <>
      <Post postObject={postObject} />
    </>
  );
}

export default Landing;
