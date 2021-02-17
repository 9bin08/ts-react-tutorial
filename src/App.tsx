import React from "react";
import Greetings from "./Greetings";
import Counter from './Counter'
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
  const onClick = (name: string) => {
    console.log(name)
  }
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form)
  }
  return (
    <>
      <Greetings name="리액트" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </>)
}

export default App;
