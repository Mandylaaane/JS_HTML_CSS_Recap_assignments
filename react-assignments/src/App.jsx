import "./App.css";
// import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import { BrowserRouter, Routes,Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import PersonDetails from "./Components/PersonDetails/PersonDetails";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import FetchDataComponent from "./Components/Effect/EffectsComponent";


function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonDetails person={person}/>}/>
        <Route path="/MyStateComponent" element={<MyStateComponent/>} />
        <Route path="/EffectsComponent" element={<FetchDataComponent />} />
      </Routes>  
    </div>
   
  );
}

export default App;
