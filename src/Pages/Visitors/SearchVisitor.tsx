import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, FormGroup, FormLabel, InputGroup, ListGroup, ListGroupItem, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import avatar from "./avatar.png";

interface props {
    visid: string;
    passportno: string;
    name: string;
}

export const SearchVisitor = (props: props) => {
    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [state, setState] = useState({
        visid: "",
        passportno: "",
        name: ""
    });

    const handlePassportnoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, passportno: e.target.value }));
    }
    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, name: e.target.value }));
    }
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmitSearch = async () => {
        if (search === '') {
            alert('Digite n. de documento ou nome de visitante');
            return;
        }

        const response = await auth.getVisitor("LOADVISITOR", "geral", search);
        alert(response);
        setData(response);
    };

    const setAlert = async (vid: string, document: string, vname: string) => {
        setState(state => ({ ...state, visid: vid, passportno: document, name: vname }));
        // auth.visitorinfo.companyno = companyno;
        // auth.visitorinfo.companyid = companyid;
        setShow(false);
    };

    useEffect(() => {
        if (props.visid != '') {
            setState(state => ({ ...state, visid: props.visid, passportno: props.passportno, name: props.name }));
        }
    },[props.visid])
    return (
        <div className="row align-items-center">
            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={2}>
                            <FloatingLabel label="n. documento">
                                <Form.Control placeholder="digite o n. documento" id="passportno" onChange={handlePassportnoInput} value={state.passportno} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={7}>
                            <FloatingLabel label="nome">
                                <Form.Control placeholder="digite o nome" id="name" onChange={handleNameInput} value={state.name} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={1}>
                            <Button onClick={() => setShow(true)}>Pesquisar</Button>
                        </Col>
                        <Col sm={2}>
                            <FormGroup className="mb-3">
                                <img src={avatar} width={160} height={120}></img>
                            </FormGroup>
                        </Col>                   
                    </Row>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={() =>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Visitantes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="digite n. documento ou nome do visitante"
                                aria-describedby="basic-addon2"
                                id="name"
                                onChange={handleSearchChange}
                                />
                                <Button variant="danger" id="button-addon2" onClick={handleSubmitSearch}>
                                    Pesquisar
                                </Button>
                            </InputGroup>
                             {data &&
                            <Card>
                                <Card.Body>
                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <th>Documento</th>
                                                <th>Nome</th>
                                            </tr>
                                        {data.map(cmpinfo =>
                                                <tr>
                                                    <th>
                                                         <Link onClick={() => setAlert(cmpinfo["VISID"], cmpinfo["PASSPORTNO"],
                                                        cmpinfo["NAME"])} to={""}>
                                                        {cmpinfo["PASSPORTNO"]}</Link>
                                                    </th>
                                                    <th>
                                                        {cmpinfo["NAME"]}
                                                    </th>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        } 
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
