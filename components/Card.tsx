import React from "react";

const Card = ({ data }) => {
  return (
    <div className="border grid grid-cols-2 gap-3 rounded m-5 p-5">
      <Content title="Name" value={data.name} />
      <Content title="Status" value={data.status} />
      <Content title="Location" value={data.location.name} />
      <Content title="Origin" value={data.origin.name} />
    </div>
  );
};

export default Card;

const Content = ({ title, value }) => {
  return (
    <div>
      <p className="text-md font-normal leading-3">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};
