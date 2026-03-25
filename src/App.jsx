 
import './App.css' 
import { Outlet } from "react-router-dom";  
import Nav from "./components/Nav";


function App() { 

  return (
    <> 
    <Nav />
      <main className="container">  
          {/* Child routes will render here */}
          <Outlet /> 
      </main>
    </>
  )
}

export default App
