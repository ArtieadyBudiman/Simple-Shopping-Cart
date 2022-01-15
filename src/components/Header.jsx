import { Container, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = ()=>{
   return(
         <Navbar className="shadow-sm p-3 mb-5 bg-body rounded sticky-top" expand="lg" variant="light" bg="light">
            <Container>
               <Navbar.Brand href="#">
               <Link to="/">WikiToko</Link>
               </Navbar.Brand>
            </Container>
         </Navbar>
   )
}

export default Header;