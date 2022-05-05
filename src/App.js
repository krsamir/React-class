import "./App.css";
import Form from "./Component/Form";
import Form1 from "./Component/Form1";
// import Demo from "./Component/Demo";

function App() {
  const name = "samir";
  return (
    <div>
      {/* props */}
      {/* <Demo data={name} /> */}
      <Form />
      <Form1 />
    </div>
  );
}

export default App;
