import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      //(-1) --> redirect previous page
      navigate(-1);
    }, 2000);
  }, []);
  return (
    <>
      <div className="wrap-notFound">
        <h1>Not Found :(</h1>
      </div>
    </>
  );
};

export default NotFound;