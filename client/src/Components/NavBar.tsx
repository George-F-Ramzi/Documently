import { RiArrowLeftLine } from "react-icons/ri";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav__header">
        <RiArrowLeftLine size={"24px"} />
        <h5 className="header__project-name">Hello World</h5>
        <div className="header__btns">
          <button>Save</button>
          <button>Save To PDF</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default NavBar;
