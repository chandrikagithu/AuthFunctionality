// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <ul className="navigate-links">
      <li>
        <Link to="/" className="link-nav">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link-nav">
          About
        </Link>
      </li>
    </ul>
  </>
)
export default Header
