
import {Outlet} from "react-router-dom"


const App=() =>{
  return (
    <div className="app-container">
    
    <main>
      <Outlet/> 
    </main>
    
  </div>
  )
}
export default App;