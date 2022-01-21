import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><i class="fab fa-accusoft mx-2"></i>Connected Learning</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Encyclopedia</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Profile-Enhancer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Chat Engine</a>
        </li>
        
        
      </ul>
      <form className="d-flex">
        <div className='container'><i class="fas fa-envelope-open-text"></i></div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default Navbar;