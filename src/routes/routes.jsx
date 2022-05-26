import Home from "../components/Home/Home";
import { Route,Routes } from "react-router-dom";

const RoutesPage=()=>{
    return(
          <div>
              
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
          </div>
      
    )
}
export default RoutesPage;