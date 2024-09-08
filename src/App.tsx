import React, { Suspense } from "react";
import "./App.css";
const ChildrenList = React.lazy(() => import("./components/ChildrenList"));

function App() {
  return (
    <div className="md:m-10">
      <div className="p-4 rounded-xl">
        <h1 className="text-2xl font-bold">Nursery Attendance</h1>
        <p className="italic mb-8">
          Manage the check-in and check-out of the children in this group.
        </p>
        <Suspense fallback={<div>Loading list of children...</div>}>
          <ChildrenList />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
