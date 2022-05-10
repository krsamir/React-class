import "./App.css";
import Form from "./Component/Form";
import Form1 from "./Component/Form1";
import Todo from "./Component/Todo";
import LifeCycle from "./Component/LifeCycle";
import ClassComponent from "./Component/ClassComponent";
import Covid from "./Component/Covid";
// import Demo from "./Component/Demo";

function App() {
  const name = "samir";
  return (
    <div>
      {/* props */}
      {/* <Demo data={name} /> */}
      {/* <ClassComponent /> */}
      {/* <Form1 /> */}
      {/* <Todo /> */}
      {/* <LifeCycle /> */}
      <Covid />
    </div>
  );
}

export default App;
