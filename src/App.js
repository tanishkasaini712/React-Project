import Jsx from "./containers/Jsx";
import DataBinding from './containers/DataBinding';
import Users from './containers/user'
import {Routes,Route,NavLink} from 'react-router-dom';

function App(){
  return (
    <div>
      <nav className = "navbar navbar-expand navbar-light bg-light">
        <ul className = "nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Jsx</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className= "nav-link" to ="/binding">DataBinding</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className = "container">
      <Routes>
        <Route path= "/" element={<Jsx/>}></Route>
        <Route path= "/binding" element={<DataBinding/>}></Route>
        <Route path= "/Users" element={<Users />}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App;
