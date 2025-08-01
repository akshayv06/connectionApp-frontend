import React from "react";
import ConnectionForm from "./ConnectionForm";

const ConnectionListPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Connections</h1>
      <ConnectionForm />
      {/* You can later add a list of connections here */}
    </div>
  );
};

export default ConnectionListPage;
