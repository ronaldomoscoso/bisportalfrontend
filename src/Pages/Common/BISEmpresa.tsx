import React, { useContext, useEffect, useState } from "react";
import { Button, Card, FloatingLabel, Form, FormGroup, FormLabel, InputGroup, ListGroup, ListGroupItem, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CompanyInfo } from "../../Classes/CompanyInfo";
import { VisitorInfo } from "../../Classes/VisitorInfo";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

interface props {
    companyid: string;
}
export const BISEmpresa = (props: props) => {
    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const [state, setState] = useState({
        companyid: "",
        companyno: ""
    });

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmitSearch = async () => {
        if (name === '') {
            alert('Digite um nome de empresa');
            return;
        }

        const response = await auth.getCompanies("LOADCOMPANYSQL", "name", name);
        setData(response);
    };

    useEffect(() => {
        const getCompanyNO = async () => {
            if (props.companyid != '') {
                const response = await auth.getCompany("LOADCOMPANY", "companyid", props.companyid);
                response.map((cmp: { [x: string]: string; }) => {
                    setState(state => ({...state, companyid: cmp["COMPANYID"], companyno: cmp["COMPANYNO"]}));
                })
            }
        };
        getCompanyNO();
    }, [props.companyid]);

    const setAlert = async (cmpid: string, cmpno: string) => {
        setState(state => ({ ...state, companyid: cmpid, companyno: cmpno }));
        // auth.visitorinfo.companyno = companyno;
        // auth.visitorinfo.companyid = companyid;
        setShow(false);
    };

    return (
        <div>
            <FormGroup className="mb-3">
                <FormLabel>Empresa</FormLabel>
                <InputGroup>
                    <Form.Control
                    placeholder="nome da empresa"
                    aria-describedby="basic-addon2"
                    id="companyno"
                    value={state.companyno}
                    disabled
                    />
                    <Button onClick={() => setShow(true)}>Selecionar</Button>
                </InputGroup>
            </FormGroup>

            <Modal show={show} onHide={() =>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Empresas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="digite um nome de empresa"
                                aria-describedby="basic-addon2"
                                id="name"
                                onChange={handleSearchInputChange}
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
                                        {data.map(cmpinfo =>
                                                <tr>
                                                    <th>
                                                         <Link onClick={() => setAlert(cmpinfo["COMPANYID"],
                                                        cmpinfo["COMPANYNO"])} to={""}>
                                                        {cmpinfo["COMPANYNO"]}</Link>
                                                 
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