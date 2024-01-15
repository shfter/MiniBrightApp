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
              style={{ padding: 0 }}
            >
              Boxes
            </button>
            <div
              className="dropdown-menu show"
              data-bs-popper="none"
              style={{
                minWidth: "20rem",
                padding: "1rem",
                backgroundColor: "var(--bs-dark)",
                color: "#f0f0f0"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>Connected Boxes</h4>
                <hr style={{ borderTop: "solid", borderColor: "#ffffff" }} />
                <div style={{ height: "40vh", overflowY: "scroll" }}>
                  <div className="connect_item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-box-seam"
                      style={{ fontSize: "250%", color: "var(--bs-teal)" }}
                    >
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                    <div
                      style={{
                        marginLeft: "5%",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <p style={{ marginBottom: 0 }}>BrightBox #2</p>
                      <p style={{ margin: 0, fontSize: "70%" }}>
                        5 sensors&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                Register New Box
              </button>
            </div>
          </div>
        </li>
        <li className="nav-item navitem">
          <div className="nav-item dropend">
            <button
              className="btn dropdown-toggle ors_dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"
              style={{ padding: 0 }}
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
        <li className="nav-item navitem" style={{ marginTop: "2rem" }}>
          <a className="nav-link a_sidebar" href="#">
            Options
          </a>
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
  <div
    id="stage_wrap"
    style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
  >
    <div style={{ height: "11vh", fontFamily: '"Coda"' }}>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-dark py-3"
        style={{ width: "100%", maxHeight: "60%" }}
      >
        <div className="container">
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-6"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 order-md-first"
            id="navcol-6"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  First Item
                </a>
              </li>
              <li className="nav-item" />
            </ul>
            <div className="d-md-none my-2">
              <button className="btn btn-light me-2" type="button">
                Button
              </button>
              <button className="btn btn-primary" type="button">
                Button
              </button>
            </div>
          </div>
          <div className="d-none d-md-block" />
        </div>
      </nav>
      <div
        style={{
          height: "40%",
          /*opacity: '0.91', */ backgroundColor: "#16181b",
          color: "#9a9a9a",
          display: "flex",
          alignItems: "center"
        }}
      >
        <p
          style={{
            maxHeight: "100%",
            fontSize: "80%",
            marginLeft: "1rem",
            margin: "0rem 0rem 0rem 0.8rem !important"
          }}
        >
          &nbsp; &nbsp;Boxes&nbsp; &nbsp; |&nbsp; &nbsp; &nbsp;Sensors&nbsp;
          &nbsp; |&nbsp; &nbsp; Moisture sensor
        </p>
      </div>
    </div>
    <div id="content_parent_wrap">
      <div id="util_content">
        <h1>Box #24</h1>
      </div>
    </div>
  </div>
</>
