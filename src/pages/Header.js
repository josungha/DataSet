// 리액트 link바 ->페이지 이동 
import {Link} from 'react-router-dom'

function Header()  {
    return (
    <div> 
        <ul class="nav">
          <li class="nav-item">
            <div class="nav-link active" aria-current="page"><Link to="/">Main</Link></div>
          </li>
          <li class="nav-item">
            <div class="nav-link"><Link to="/login">Login</Link></div>
          </li>
          <li class="nav-item">
            <div class="nav-link"><Link to="/Regester">Regester</Link></div>
          </li>
      </ul>  
    </div>
    )
}
export default Header;