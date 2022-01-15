import { Container, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = ()=>{
   return(
         <Navbar className="shadow-sm p-3 mb-5 bg-body rounded sticky-top" expand="lg" variant="light" bg="light">
            <Container>
               <Navbar.Brand href="#">
               <Link to="/" style={{ textDecoration: 'none' }}>
                  <h3 className="logo">WikiToko</h3>
               </Link>
               </Navbar.Brand>
            </Container>
         </Navbar>
   )
}

export default Header;