import { Suspense, lazy, useState } from "react";
import "./App.css";

const Button = lazy(() => import("./components/Button.js"));
const JobTable = lazy(() => import("./containers/JobTable.js"));

function App() {
  const [job, setjob] = useState([]);
  function addJob() {
    const title = document.querySelector(".input");
    if (title.value !== "") {
      var object = {
        title: title.value,
      };
      setjob((job) => [...job, object]);
    }
  }
  function changeOption() {
    var but = document.querySelector(".but");
    var circle = document.querySelector(".but div");
    if (but.classList.contains("justify-start")) {
      but.classList.remove("justify-start");
      but.classList.add("justify-end");
      circle.classList.remove("bg-purple-400");
      circle.classList.add("bg-gray-400");
    } else {
      but.classList.remove("justify-end");
      but.classList.add("justify-start");
      circle.classList.add("bg-purple-400");
      circle.classList.remove("bg-gray-400");
    }
  }
  return (
    <Suspense fallback="Chotto">
      <div className="text-purple-950 text-[60px] flex justify-center my-[30px] font-bold">
        Todo App
      </div>
      <div className="flex justify-center items-center mb-[30px]  ">
        <div className="mr-3 rounded-2">
          <input
            className="h-[45px] p-[5px] rounded-1 border-2 border-purple-500 rounded-[4px] w-[400px] input"
            type="text"
            placeholder="Add a job"
          />
        </div>
        <div onClick={addJob}>
          <Button text="Add" />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className=" w-[80px] border h-[35px] rounded-[23px] border-[2px] flex items-center cursor-pointer justify-start but"
          onClick={() => changeOption()}
        >
          <div className="w-[25px] h-[25px] rounded-[50%] bg-purple-400 m-[5px]"></div>
        </div>
      </div>
      <div className="mt-[50px]">
        <JobTable lst={job} />
      </div>
    </Suspense>
  );
}

export default App;
