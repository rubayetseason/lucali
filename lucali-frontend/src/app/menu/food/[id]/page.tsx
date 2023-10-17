import React from "react";

type IdProps = {
  params: any;
};

const SingleFoodItem = ({ params }: IdProps) => {
  const { id } = params;

  return <div>this is single food - {id}</div>;
};

export default SingleFoodItem;
