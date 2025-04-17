import React, { useEffect } from "react";

const Button = () => {
  useEffect(() => {
    // destroy / component unmount
    return () => {
      console.log("component mar gaya....");
    };
  }, []);
  return (
    <div>
      <button>SMIT</button>
    </div>
  );
};

export default Button;