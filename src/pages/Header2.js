//리액트 메뉴바만들어본곳 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaReact} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';

function Header2(){
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg"> {/*fixed="top"-> top부분에 고정하기*/}
                <Container fluid>              
                    <Navbar.Brand href="/"><FaReact/> KKgale</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" fa-pull-left/>{/*네비게이바버튼 생성*/}
                    <Navbar.Collapse id="navbarScroll">{/*네비게이션바 자동접기*/} 
                        {/* 검색부분 */}
                        <Form className="d-flex">
                            <FormControl type="search"   placeholder="Search" className=" my-2 my-lg-0" aria-label="Search" ></FormControl>
                            <Button variant="dark" className=" my-2 my-lg-0"><BsSearch/></Button>
                        </Form>
                        <Nav className="me-auto my-2 my-lg-0"navbarScroll>
                            <Nav.Link href="/Datasets">Datasets</Nav.Link>
                            <Nav.Link href="/Uplod">Uplod</Nav.Link>
                            <Nav.Link href="/Library">Library</Nav.Link>
                            <Nav.Link href="/Dos">Dos</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="#action3">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>Link</Nav.Link>
                        </Nav>
                    
                    <div>
                        <Button variant="primary" className="ml-2 mr-2 my-lg-0" href="/Login">Login</Button>{' '}
                        <Button variant="primary" className="ml-2 mr-2 my-2 my-lg-0" href="/Regester">Regester</Button>{' '}
                    </div>
                     </Navbar.Collapse>  
                    
                </Container>
            </Navbar>
        </div>
    )
}
export default Header2;
