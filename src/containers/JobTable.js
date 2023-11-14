import React, { useEffect, useState } from "react";
import { lazy } from "react";

const Job = lazy(() => import("../components/job.js"));

function JobTable(data) {
  var { lst, page } = data;
  const [lstJob, setlstJob] = useState(lst);

  const handleDelete = (index) => {
    const updatedLst = [...lstJob];
    updatedLst.splice(index, 1);
    lst.splice(index, 1);
    setlstJob(updatedLst);
  };
  const handleHightLight = (index) => {
    const updatedLst = [...lstJob];
    if (updatedLst[index].isHightLighted === false) {
      updatedLst[index].isHightLighted = true;
      lst[index].isHightLighted = true;
    } else {
      updatedLst[index].isHightLighted = false;
      lst[index].isHightLighted = false;
    }
    setlstJob(updatedLst);
  };
  useEffect(() => {
    setlstJob(lst);
  }, [lst]);
  return lstJob.map((data, index) => {
    const { title, isHightLighted } = data;
    if (index >= (page - 1) * 5 && index <= page * 5 - 1)
      return (
        <Job
          key={index}
          title={title}
          id={index}
          isHightLighted={isHightLighted}
          onDelete={() => handleDelete(index)}
          onHightLight={() => handleHightLight(index)}
        />
      );
  });
}

export default JobTable;
