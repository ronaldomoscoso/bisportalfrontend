import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "./avatar.png";
import { Card, Row, Col, FormGroup, Form, FormLabel, Button } from "react-bootstrap";
import { BISEmpresa } from "../Common/BISEmpresa";
import { SearchVisitor } from "./SearchVisitor";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { CompanyInfo } from "../../Classes/CompanyInfo";
import { BISCards } from "../Common/BISCards";

interface Props {
    visid: string;
}

interface FormData {
    passportno: string;
}
export const Visitors = (props: Props) => {
    const auth = useContext(AuthContext);
    const { register, formState: { errors } } = useForm<FormData>();
    const [visid, setID] = useState(props.visid);
    const [data, setData] = useState('');
    const [companyid, setCompanyID] = useState('0013605EE83D76CA');
    const [passportno, setPassportNO] = useState('');
    const navigate = useNavigate();

    const [phonemobile, setPhoneMobile] = useState('');
    const [phoneoffice, setPhoneOffice] = useState('');
    const [phoneother, setPhoneOther] = useState('');

    const registerOptions = {
        passportno: { required: "Titulo em branco!",
                 maxLength: {
                     value: 50,
                     message: "Maximo 50 letras.",
                 }
        },
    };

    const handlePhoneMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneMobile(e.target.value);
    }

    const handlePhoneOfficeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneOffice(e.target.value);
    }

    const handlePhoneOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneOther(e.target.value);
    }

    const handlePassportNOInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassportNO(e.target.value);
    }

    const getData = async () => {
        if (props.visid !== '0') {
            const response = await auth.getVisitor('', 'visid', props.visid);
            setData(response);
        }
        else
            setData('');
    }

    const handleKeyDown = () => {
        alert('ok');
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Card>
            <Card.Body>
                <Row>
                    <Col sm={3}>
                        <FormGroup className="mb-3">
                            <FormLabel>N.Documento</FormLabel>
                            <Form.Control
                            placeholder="n. do documento"
                            aria-describedby="basic-addon2"
                            id="passportno"
                            onChange={handlePassportNOInputChange}
                            onKeyDown={event => {
                                if (event.key === "Enter") {
                                    <SearchVisitor filter={passportno}/>
                                }
                            }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup className="mb-3">
                            <FormLabel>Nome</FormLabel>
                            <Form.Control
                            placeholder="nome do visitante"
                            aria-describedby="basic-addon2"
                            id="name"
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup className="mb-3">
                            <img src={avatar} width={160} height={120}></img>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup className="mb-3">
                            <FormLabel>Tel. Fixo</FormLabel>
                            <Form.Control
                            placeholder="telefone fixo"
                            aria-describedby="basic-addon2"
                            id="phoneoffice"
                            onChange={handlePhoneOfficeChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup className="mb-3">
                            <FormLabel>Tel. Celular</FormLabel>
                            <Form.Control
                            placeholder="telefone celular"
                            aria-describedby="basic-addon2"
                            id="phonemobile"
                            onChange={handlePhoneOtherChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup className="mb-3">
                            <FormLabel>E-mail</FormLabel>
                            <Form.Control
                            placeholder="e-mail"
                            aria-describedby="basic-addon2"
                            id="email"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <BISEmpresa companyid="" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FormGroup className="mb-3">
                            <FormLabel>Observações</FormLabel>
                            <Form.Control as="textarea" rows={3} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <BISCards visid="" sitecode="" cardno=""/>
                    </Col>
                    <Col sm={6}>
                        Autorizacao
                    </Col>
                </Row>
            </Card.Body>
            <Button onClick={() => alert(auth.visitorinfo.companyid)}>Button</Button>
        </Card>
        </div>
    );
}
