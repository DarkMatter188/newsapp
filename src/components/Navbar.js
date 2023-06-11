import React, { Component } from 'react'

import {
  Link
} from "react-router-dom";

export class Navbar extends Component {

  constructor(){
    super();
    this.state={
      mode : 'light',
      fontMode : 'dark'
    }
  }

  changeMode =()=>{
    
    if(this.state.mode === 'light'){
      this.setState({
        mode : 'dark',
        fontMode : 'light'
      })
    }
    else{
      this.setState({
        mode : 'light',
        fontMode : 'dark'
      })
    }
  }
  render() {

    return (
        <>
      <div>
            <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode} .bg-dark`} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/">Home</a>
                    </li>
                        <li><Link className="nav-link" to="/business">Business</Link></li>
                          <li><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                          <li><Link className="nav-link" to="/general">General</Link></li>
                          <li><Link className="nav-link" to="/health">Health</Link></li>
                          <li><Link className="nav-link" to="/science">Science</Link></li>
                          <li><Link className="nav-link" to="/sports">Sports</Link></li>
                          <li><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                </div>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.changeMode}/>
              <label class={`form-check-label text-${this.state.fontMode}`} htmlFor="flexSwitchCheckDefault" onClick={this.changeMode}>Dark mode</label>
</div>
            </nav>
      </div>
      </>
    )
  }
}

export default Navbar
