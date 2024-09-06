import React, { Suspense } from "react";
import "./App.css";
import ChildrenList from "./components/ChildrenList";

function App() {
  return (
    <div>
      <h3 className="text-lg font-bold">Attendance in the Nursery</h3>
      <ChildrenList />
    </div>
  );
}

export default App;
