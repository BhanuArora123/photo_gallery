import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
  return (
    <Nav defaultActiveKey="/" as="ul" className='bg-primary text-white w-100 d-flex align-items-center'style={{height:"50px"}}>
      <Nav.Item as="li">
        <Link className='text-white nav-link' to="/">My Gallery</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className='text-white nav-link' to="/new">Add Picture</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className='text-white nav-link' to="/">View Pictures</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;