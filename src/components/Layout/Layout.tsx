import * as React from 'react';
import ModalBoxes from './ModalBoxes';


interface Props {
    children?: React.ReactNode
} 

export default function Layout({children, ...props}:Props){
    return(
<>
  <aside id="sidebar">
    <div id="logo">
      <h1 style={{ fontSize: "1.2vw", color: "var(--bs-teal)" }}>
        mini
        <span style={{ fontSize: "1.7vw", color: "var(--bs-white)" }}>
          BrightBox
        </span>
      </h1>
    </div>
    <div style={{ width: "70%" }}>
      <ul
        className="nav"
        id="sidebar_navItems"
        style={{ height: "80vh", width: "90%", border: "none" }}
      >
        <li className="nav-item navitem">
          <div className="nav-item dropend show">
            <button
              className="btn dropdown-toggle ors_dropdown"
              aria-expanded="true"
              data-bs-toggle="dropdown"
              type="button"
              style={{ padding: 0, display: "flex", color: "#ffffff", opacity:0.5}}
            >
              Boxes
            </button>
            <div
              className="dropdown-menu"
              data-bs-popper="none"
              style={{
                minWidth: "20rem",
                padding: "1rem",
                backgroundColor: "var(--bs-dark)",
                color: "#f0f0f0"
              }}
            >
            <ModalBoxes/>
            </div>
          </div>
        </li>
        <li className="nav-item navitem">
          <div className="nav-item dropend">
            <button
              disabled={true}
              className="btn dropdown-toggle ors_dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
              style={{ padding: 0, display: "flex", color: "#ffffff", opacity:0.5}}
            >
              Recipies
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                First Item
              </a>
              <a className="dropdown-item" href="#">
                Second Item
              </a>
              <a className="dropdown-item" href="#">
                Third Item
              </a>
            </div>
          </div>
        </li>
      </ul>
      <button
        className="btn btn-primary ors_btn"
        type="button"
        style={{
          width: "100%",
          backgroundColor: "var(--bs-gray-300)",
          border: "none",
          color: "var(--bs-dropdown-color)"
        }}
      >
        DOCS
      </button>
    </div>
  </aside>
  {children}
  </>
    );
}