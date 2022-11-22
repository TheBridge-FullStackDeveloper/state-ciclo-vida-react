import React, { useEffect, useState } from "react";
import ExampleChild from "../ExampleChild/ExampleChild";

const ExampleFunctional = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [show, setShow] = useState(true);

  const handleRemove = () => {
    setShow(false);
  };
  //componentDidMount()
  useEffect(() => {
    console.log("hola");
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 1000);
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("componente actualizado");
  });

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      {show ? <ExampleChild /> : null}
      <button onClick={handleRemove}>Eliminar componente </button>
    </div>
  );
};

export default ExampleFunctional;
