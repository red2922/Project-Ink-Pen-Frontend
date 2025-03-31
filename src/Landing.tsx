import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post";
import PostObject from "./entities/PostObject";

function Landing() {
  const [data, setData] = useState();
  const postObject: PostObject = { id: 1, imageUrl: "HUH" };

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
