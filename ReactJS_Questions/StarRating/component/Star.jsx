import React, { useState } from "react";

export default function Star({
  filled,
  handleclick,
  hanldeMouseEnter,
  hanldeMouseLeave,
  index,
}) {
  return (
    <span
      style={{ fontSize: "2em" }}
      onMouseEnter={() => hanldeMouseEnter(index + 1)}
      onMouseLeave={() => hanldeMouseLeave()}
      onClick={() => handleclick(index + 1)}
    >
      <i className={`${filled ? "fa fa-star" : "fa fa-star-o"}`}></i>
    </span>
  );
}
