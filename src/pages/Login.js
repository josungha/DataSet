import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import ToastContainer from "react-bootstrap/ToastContainer";
import Container from 'react-bootstrap/Container';


function Login(){
    return (
        <div >
          <Container className="panel col-md-5 mx-auto" > 
            <Form>
                <Form.Group as ={Row} controlId="formPlaintextUserID" className= "mr-1 ml-1 mt-1 mb-1">
                    <Form.Label column sm ={3}>UserID</Form.Label>
                    <Col sm={9}>
                        <Form.Control type="UserID" placeholder="UserID" />
                    </Col>
                </Form.Group>
                    <Form.Group as ={Row} controlId="formPlaintextPassword" className= "mr-1 ml-1 mt-2 mb-1">
                        <Form.Label column sm ={3}>Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="Password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group className= "mt-3" >
                        <Form.Check type="checkbox" id="disabledFieldsetCheck" label="로그인 유지하기"/>
                    </Form.Group>
                    <br/>
                    <div className="d-grid gap-1" >
                        <Button variant="secondary" type="submit" >
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Container>  
                
            
        </div>
    );
}

export default Login


