import { useEffect, useState } from "react";
import axios from "axios";

function Landing() {
  const [data, setData] = useState();

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

  return <></>;
}

export default Landing;
