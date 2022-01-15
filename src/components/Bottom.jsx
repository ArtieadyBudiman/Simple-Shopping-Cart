import {Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Bottom = (props) =>{

   return(
      <Navbar className="bottom fixed-bottom" expand="lg" variant="light" bg="light">
         <div className="total">
            <p>
               {`Total Belanja : Rp ${parseInt(props.totalAmount).toLocaleString()},-`}
            </p>
            <Button variant="primary">
               <Link to={props.link} style={{ textDecoration: 'none' }}>
                  <span className="buttonText">{props.button}</span>
               </Link>
            </Button>
         </div>
      </Navbar>
   )
}

export default Bottom;