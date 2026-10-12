import { useState } from 'react';

function AppNavbar() {
  // true = menu is open, false = menu is closed
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">StudentPortal</a>

       
        <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={menuOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
          </ul>

         
          <div className="dropdown me-3">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              onClick={() => setSettingsOpen(!settingsOpen)}
            >
              Settings
            </button>
            <ul className={settingsOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Log out</a></li>
            </ul>
          </div>

          
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
