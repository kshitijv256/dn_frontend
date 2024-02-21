import { useState } from "react";
import ResizablePage from "./task1/resizable";
import ApiTest from "./task2/apiTest";

function App() {
  const [task, setTask] = useState(1);

  return (
    <>
      <div className="w-full h-full flex justify-end font-bold">
        <button
          className="p-2 rounded-md bg-blue-600 m-2 text-white shadow-lg hover:shadow-none hover:bg-blue-500"
          onClick={() => setTask(1)}
        >
          Task 1
        </button>
        <button
          className="p-2 rounded-md bg-blue-600 m-2 text-white shadow-lg hover:shadow-none hover:bg-blue-500"
          onClick={() => setTask(2)}
        >
          Task 2
        </button>
      </div>
      <div className="w-full h-[80vh] text-center">
        {task === 1 ? <ResizablePage /> : <ApiTest />}
      </div>
    </>
  );
}

export default App;
