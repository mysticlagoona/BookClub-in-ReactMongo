import React, { Component } from 'react';
import { Link } from "@reach/router";
import NavBar from '../navigation/NavBar';




class Books extends Component {
    render() {
      return (
        <div>
            <section>
                <h1>Kids.BookClub</h1>
                <p><Link to="/login/account">Login</Link>|<Link to="/login/newaccount">Register</Link></p>
            </section>
            <section>
                <NavBar />
            </section>
        </div>
      );
    }
  }
  
  export default Books;