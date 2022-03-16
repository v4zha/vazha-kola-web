import {Link} from "react-router-dom"
const Home=()=>(
      <div>
        <ul>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
) ;
export default Home;