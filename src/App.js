import './App.css';
import {LinkComponent} from "./components/linkComponent"
import {Layout} from "./components/Layout"
import {Home} from "./components/home"
import {Formats} from "./components/Formats"
import {Rules} from "./components/rules"
import {AboutUS} from "./components/aboutUS"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {  

  return (
   <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Layout/>}>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/formats" element = {<Formats/>}></Route>
          <Route path = "/rules" element = {<Rules/>}></Route>
          <Route path = "/about-us" element = {<AboutUS/>}></Route>
          
          <Route path = "/link/:data" element = {<LinkComponent/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}


export default App;
