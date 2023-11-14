import { Suspense, lazy, useState } from "react";
import "./App.css";

const Button = lazy(() => import("./components/Button.js"));
const JobTable = lazy(() => import("./containers/JobTable.js"));

function App() {
  const [curentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [job, setjob] = useState([]);
  function addJob() {
    const title = document.querySelector(".input");
    if (title.value !== "") {
      var object = {
        title: title.value,
        isHightLighted: false,
      };
      setjob((job) => [object, ...job]);
      title.value = "";
      if ((job.length % 5) + 1 === 0) {
        setTotalPage(Math.floor(job.length / 5));
      } else {
        setTotalPage(Math.floor(job.length / 5) + 1);
      }
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
  function nBut() {
    console.log("next");
    if (curentPage < totalPage) {
      const pre = curentPage;
      setCurrentPage(pre + 1);
    } else setCurrentPage(1);
  }
  function pBut() {
    if (curentPage > 1) {
      const pre = curentPage;
      setCurrentPage(pre - 1);
    } else setCurrentPage(totalPage);
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
          <Button text="Add" className="" />
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
      <div className="my-[50px] h-[250px]">
        <JobTable lst={job} page={curentPage} />
      </div>
      <div className="flex w-[40%] justify-end mx-auto">
        <div onClick={pBut}>
          <Button
            text="P"
            className="text-[15px] px-[10px] border cursor-pointer mx-[10px] rounded-lg hover:bg-gray-400 hover:text-white"
          />
        </div>
        <div>
          {curentPage} / {totalPage}
        </div>
        <div onClick={nBut}>
          <Button
            text="N"
            className="text-[15px] px-[10px] border cursor-pointer mx-[10px] rounded-lg hover:bg-gray-400 hover:text-white"
          />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
