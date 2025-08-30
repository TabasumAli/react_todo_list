import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import './App.css';
// import InlineComp from './components/InlineComp'
// import OutlineComp from './components/OutlineComp'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Todo />




      
      {/* <InlineComp /> */}
      {/* <OutlineComp /> */}
    </div>
  );
}

export default App;
// https://react-todo-list-3pklohqvi-syed-tabasum-ali-shahs-projects.vercel.app/