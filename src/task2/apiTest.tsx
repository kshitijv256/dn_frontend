import { useEffect, useState } from "react";
import {
  SampleData,
  getCount,
  getApiData,
  initCounter,
  createNewData,
  updateData,
} from "./apis";

function ApiTest() {
  const [data, setData] = useState<SampleData[]>([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [type, setType] = useState("add");

  useEffect(() => {
    getCount().then((res) => {
      if (res.length === 0) {
        initCounter();
      }
    });
    getApiData(setData);
    getCount().then((res) => {
      if (res.length > 0) {
        setCount(res[0].count);
      }
    });
  }, []);

  useEffect(() => {
    if (type === "add") {
      setText("");
    } else {
      setText(data[data.length - 1] ? data[data.length - 1].data : "");
    }
  }, [data, type]);

  const handleSubmit = () => {
    if (type === "add") {
      createNewData({ data: text })
        .then(() => getApiData(setData))
        .then(() => getCount().then((res) => setCount(res[0].count)));
      setType("update");
    } else {
      updateData(data[data.length - 1]._id, { data: text })
        .then(() => getApiData(setData))
        .then(() => getCount().then((res) => setCount(res[0].count)));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Api Task</h1>
      <p className="text-xl font-bold">Count: {count}</p>
      <p className="text-xl font-bold">Mode: {type}</p>
      <p className="text-xl font-bold mb-4">
        data: {data[data.length - 1] ? data[data.length - 1].data : ""}
      </p>
      <div className="w-full flex justify-center">
        <input
          type="text"
          name="text"
          id="text"
          className="p-2 border-2 rounded-md  my-2 md:w-1/2 w-3/4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex gap-2 w-full justify-center font-bold">
        <div className="flex flex-col w-min gap-2 mx-2">
          <button
            disabled={type === "add" ? true : false}
            className={
              "p-2 rounded-md bg-yellow-500 text-white " +
              (type === "add" ? "bg-gray-500 cursor-not-allowed" : "")
            }
            onClick={() => setType("add")}
          >
            Add
          </button>
          <button
            disabled={type === "update" || data.length == 0 ? true : false}
            className={
              "p-2 rounded-md bg-sky-500 text-white " +
              (type === "update" || data.length == 0
                ? "bg-gray-500 cursor-not-allowed"
                : "")
            }
            onClick={() => setType("update")}
          >
            Update
          </button>
        </div>
        <button
          className="p-2 rounded-md bg-emerald-500 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ApiTest;
