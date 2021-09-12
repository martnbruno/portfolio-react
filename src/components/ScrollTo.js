import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

const ScrollTo = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <FiArrowUpCircle className="scroll_icon" onClick={scroll} />
    </div>
  );
};

export default ScrollTo;
