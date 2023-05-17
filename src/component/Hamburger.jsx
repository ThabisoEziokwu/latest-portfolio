import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import "../index.css";
function Hamburger() {
  const color = "#040404";
  return (
    <HamBurger BackgroundColor={color}>
      <nav role="navigation">
        <div id="menuToggle" className="toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Dlinks>
              <li>Pricing</li>
            </Dlinks>
            <Dlinks>
              <li>Event Catelogue</li>
            </Dlinks>
            <Dlinks>
              <li>Resources</li>
            </Dlinks>
            <Dlinks>
              <li>Contact</li>
            </Dlinks>
          </ul>
        </div>
      </nav>
    </HamBurger>
  );
}
const HamBurger = styled.div`
  padding: 0px;
  margin: 0px;
  position: relative;

  .toggle {
    span {
      background: ${(props) => props.BackgroundColor};
    }
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
`;
const Dlinks = styled.a`
  li {
    text-decoration: none;
    color: #303030bc;
    transition: color 0.3s ease;
  }
  :hover {
    li {
      color: #16ce72;
    }
  }
  &.active {
    color: #303030;
  }
`;
export default Hamburger;
