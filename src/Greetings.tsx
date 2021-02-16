import React from "react";

type GreetingProps = {
  name: string;
};

const Greetings: React.FC<GreetingProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default Greetings;
