import React from "react";

const NonAuthLayout = ({ children }) => {
  return (
    <div>
      <div>Non Auth Layout</div>
      {children}
    </div>
  );
};

export default NonAuthLayout;
