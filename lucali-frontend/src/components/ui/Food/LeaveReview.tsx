import React from "react";

type IdProps = {
  id: string;
};

const LeaveReview = ({ id }: IdProps) => {
  return (
    <div>
      <h1>This is leave review {id}</h1>
    </div>
  );
};

export default LeaveReview;
