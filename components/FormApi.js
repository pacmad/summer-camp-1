import axios from "axios";
import React, { useEffect } from "react";

const formApi = () => {
  useEffect(() => {
    axios.get("").then((res) => console.log());
  }, []);
  return <div>form</div>;
};

export default formApi;
