import { Button } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      {" "}
      Welcome to vite config with antd and tailwind css setup
      <div className="text-3xl font-bold underline text-primary">
        Test for tailwind css{" "}
      </div>
      <Button type="primary" className="!shadow-none">
        Antd Button
      </Button>
    </div>
  );
};

export default Dashboard;
