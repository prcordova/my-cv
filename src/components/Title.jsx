import React from "react";
import "./title.sass";

export const Title = ({ className, children, ...props }) => {
  return <h2 className="title">{children}</h2>;
};
