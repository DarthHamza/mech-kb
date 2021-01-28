import { StyledLink, NavProduct } from "../styles";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <StyledLink className="navbar-brand" exact to="/">
        Vader's Keyboards
      </StyledLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavProduct className="nav-item nav-link" exact to="/">
            Home
          </NavProduct>
          <NavProduct className="nav-item nav-link" to="/products">
            Products
          </NavProduct>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
