import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-element">
      <Link to="/" className="link-element">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
          className="logo-image"
          alt="website logo"
        />
      </Link>
      <button type="button" className="logout-button" onClick={logOut}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
