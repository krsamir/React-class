import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Lists from "./MUI/List";
// import NavBar from "./MUI/NavBar";
import Todo from "./Part2/Todo";
// import Product from "./Part2/Product";
// import Form from "./Component/Form";
// import Form1 from "./Component/Form1";
// import Todo from "./Component/Todo";
// import LifeCycle from "./Component/LifeCycle";
// import ClassComponent from "./Component/ClassComponent";
// import Covid from "./Component/Covid";
// import Demo from "./Component/Demo";
let theme = createTheme({
  typography: {},
  palette: {
    primary: {
      // main: "#43b049",#cef43f
      main: "#0e406a",
      contrastText: "#fff",
    },
    // secondary: {
    //   main: "#edf2ff",
    // },
  },
});
function App() {
  // const name = "samir";
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <NavBar /> */}
        {/* <Lists /> */}
        <Todo />
        {/* <Product /> */}
        {/* props */}
        {/* <Demo data={name} /> */}
        {/* <ClassComponent /> */}
        {/* <Form1 /> */}
        {/* <Todo /> */}
        {/* <LifeCycle /> */}
        {/* <Covid /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
