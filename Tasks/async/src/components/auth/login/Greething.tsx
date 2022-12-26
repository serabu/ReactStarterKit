import React from "react";

interface IGreeting {
  name: string;
}

const Greething = ({name}: IGreeting) => {
  // const {name} = props
  return (
    <div>
      <h3>Zdarova {name}</h3>
    </div>
  );
};
export default Greething;
