import { useContext, useEffect, useState } from "react";
import { Button, Card, Form, InputGroup, Modal, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

function convertjJSON(jsonstring: string) {
    var obj = JSON.parse(jsonstring);
    
    var res = [];

    for (var i in obj)
        res.push(obj[i]);

    return res;
}

interface props {
    filter: string;
}

export const SearchVisitor = (props: props) => {
    const auth = useContext(AuthContext);
    const [data, setData] = useState('');
    const [search, setSearch] = useState(props.filter);
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmitNew = () =>{
        navigate('/Visitors/0');
    }

    const handleSubmitSearch = async () => {
        if (search.length === 0) {
            alert('Digite um n. de documento ou nome');
            return;
        }

        const response = await auth.getVisitor("LOADVISITOR", "geral", search);  
        // setData(response);
        console.log(response);
    };

    useEffect(() => {
        alert(show);
    }, []);
    
    return (
        <div>
            <Modal show={show} onHide={() =>setShow(false)}>
                <Modal.Body>
                <Card>
                <Card.Body>
                    <Form.Group>
                        <Form>
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="digite o n. do documento ou nome"
                                aria-describedby="basic-addon2"
                                id="search"
                                onChange={handleSearchInputChange}
                                value={props.filter}
                                />
                                <Button variant="danger" id="button-addon2" onClick={handleSubmitSearch}>
                                    Pesquisar
                                </Button>
                                <Button variant="outline-danger" id="button-addon2" onClick={handleSubmitNew}>
                                    Novo Visitante
                                </Button>
                                <Button onClick={() => setShow(false)}>Fechar</Button>
                            </InputGroup>
                        </Form>
                    </Form.Group>
                </Card.Body>
            </Card>
            {data && data.length > 2 &&
                <Card>
                    <Card.Body>
                        <Table striped bordered hover>
                            <tbody>
                            {convertjJSON(data).map(visinfo =>
                                    <tr>
                                        <th>
                                            <Link to={`/Visitors/${visinfo.VISID}`}>{visinfo.PASSPORTNO}</Link>
                                            </th>
                                        <th>{visinfo.NAME}</th>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            }
                </Modal.Body>
            </Modal>
        </div>
    );
}
