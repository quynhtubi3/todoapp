import React from "react";
import starImg from "../imgs/star.png";
import trashImg from "../imgs/trash-can.png";

function Job(data) {
  const { title, onDelete, onHightLight, isHightLighted } = data;
  return (
    <div>
      <div
        className={`flex justify-between sm:w-[500px] w-[300px] mx-auto max-w-[500px] border-[2px] min-h-[50px] items-center hover:bg-purple-100
      ${isHightLighted ? "bg-yellow-100 hover:bg-yellow-400" : ""}`}
      >
        <div className="mx-[20px]">{title}</div>
        <div className="flex">
          <div>
            <img
              className="w-[20px] h-[20px] cursor-pointer mx-[10px]"
              src={starImg}
              alt=""
              onClick={onHightLight}
            />
          </div>
          <div>
            <img
              className="w-[20px] h-[20px] cursor-pointer mx-[10px]"
              src={trashImg}
              alt=""
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
