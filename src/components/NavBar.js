import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  StyledLink,
  NavProduct,
  AuthButtonStyled,
  UsernameStyled,
} from "../styles";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <StyledLink className="navbar-brand" exact to="/">
        Vader's Keyboards
      </StyledLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {user ? (
            <UsernameStyled>Hala Wallah, {user.username}! </UsernameStyled>
          ) : (
            <>
              <Link to="/signup">
                <AuthButtonStyled>Sign up</AuthButtonStyled>
              </Link>
              <Link to="/signin">
                <AuthButtonStyled>Sign in</AuthButtonStyled>
              </Link>
            </>
          )}
          <NavProduct className="nav-item nav-link" to="/shops">
            Shops
          </NavProduct>
          {user && (
            <NavProduct className="nav-item nav-link" to="/products">
              Products
            </NavProduct>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
