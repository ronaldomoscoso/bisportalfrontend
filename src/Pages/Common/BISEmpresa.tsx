import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, FormGroup, FormLabel, InputGroup, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CompanyInfo } from "../../Classes/CompanyInfo";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

interface props {
    companyid: string;
}
export const BISEmpresa = (props: props) => {
    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState('');

//    let companyinfo: CompanyInfo = { COMPANYID: '', COMPANYNO: '', NAME: '' };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmitSearch = async () => {
        if (name === '') {
            alert('Digite um nome de empresa');
            return;
        }

        const response = await auth.getCompanies("LOADCOMPANYSQL", "name", name);
//        setData(response);
        console.log(data);
    };

    useEffect(() => {
        const getCompanyNO = async () => {
            const response = await auth.getCompany("LOADCOMPANY", "companyid", props.companyid);
            setData(response);
            const cmpinfo: CompanyInfo = JSON.parse(response);
            console.log(cmpinfo);
        };
        getCompanyNO();
    }, []);

    const setAlert = async (companyid: string, companyno: string) => {
        auth.visitorinfo.companyid = companyid;
        auth.visitorinfo.companyno = companyno;
        setShow(false);
    };

    function convertjJSON(jsonstring: string) {
        var obj = JSON.parse(jsonstring);
        
        var res = [];
    
        for (var i in obj)
            res.push(obj[i]);
    
        return res;
    }
    
    return (
        <div>
            <FormGroup className="mb-3">
                <FormLabel>Empresa</FormLabel>
                <InputGroup>
                    <Form.Control
                    placeholder="empresa"
                    aria-describedby="basic-addon2"
                    id="companyno"
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
                                        {/* <tbody>
                                        {data.map(cmpinfo =>
                                                <tr>
                                                    <th>
                                                        <Link onClick={() => setAlert(cmpinfo["COMPANYID"],
                                                        cmpinfo["COMPANYNO"])} to={cmpinfo["COMPANYID"]}>
                                                        {cmpinfo["COMPANYNO"]}</Link>
                                                        </th>
                                                </tr>
                                            )}
                                        </tbody> */}
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