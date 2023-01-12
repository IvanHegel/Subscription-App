import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context';
import styled from 'styled-components';
const LeftNavContainer= styled.div`
margin-left: auto;`
const Navbar =()=>{
const [state, setState] = useContext(UserContext);
const navigate = useNavigate()
const handleLogout= ()=>{
  setState({data:null, loading: false, error: null})
  localStorage.removeItem("token")
  navigate("/")
}
    return(
    <Nav >
    <Nav.Item>
      <Link to="/" className="nav-link">Home</Link>
    </Nav.Item>
    {state.data && (
      <LeftNavContainer>
      <Nav.Item>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
    </Nav.Item>
    </LeftNavContainer>
    
    )}
    
    </Nav>
    )
};

export default Navbar;