import React, { useState } from "react";
import { lazy } from "react";

const Job = lazy(() => import("../components/job.js"));

function JobTable(data) {
  const { lst } = data;
  const [jobs, setJobs] = useState(lst);
  const handleDelete = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };

  return jobs.map((data, index) => {
    const { title } = data;
    return (
      <Job
        key={index}
        title={title}
        id={index}
        onDelete={() => handleDelete(index)}
      />
    );
  });
}

export default JobTable;
