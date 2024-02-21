import React from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <>
      <div>This is my project</div>
      <button onClick={handleNavigation}>Home</button>
    </>
  );
};

export default Project;
