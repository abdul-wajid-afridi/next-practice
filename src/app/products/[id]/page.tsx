import React from "react";

type ProdId = {
  params: {
    id: string | number;
  };
};

const page = ({ params }: ProdId) => {
  return <div>{params.id}</div>;
};

export default page;
