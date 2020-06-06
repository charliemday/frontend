import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';

import routes from 'Navigation/Routes';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <Nav
        activeKey='/home'
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        style={{
          borderBottom: 'solid 2px gray',
          padding: 20,
        }}
      >
        <Nav.Item>
          <Nav.Link href={routes.home}>Home</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navbar;
