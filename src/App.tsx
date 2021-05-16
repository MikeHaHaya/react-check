import React from "react";
import Header from "./components/Header";
import SomeComponent from "./components/SomeComponent";
import Tasks from "./components/Tasks";

function App() {
    let age = 20;
  return (
    <div className="App">
        <Header />
        <Tasks />
    </div>
  );
}




// Using a variable instead of a function

// const App = () => {
//     return (
//         <div className="App">
//             <h1>Hello from a const variable</h1>
//         </div>
//     );
// };



// Using a class instead of a function or a variable in react

// class App extends React.Component {
//     render() {
//         return <h1>Hello from a class</h1>
//     }
// }

export default App;
