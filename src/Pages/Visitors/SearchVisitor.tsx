import { useContext, useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, FormGroup, Row } from "react-bootstrap";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import avatar from "./avatar.png";

interface props {
    filter: string;
}

export const SearchVisitor = (props: props) => {
    const auth = useContext(AuthContext);
    const [state, setState] = useState({
        passportno: "",
        name: ""
    });

    const handlePassportnoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, passportno: e.target.value }));
    }
    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(state => ({...state, name: e.target.value }));
    }

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
                            <Button>Pesquisar</Button>
                        </Col>
                        <Col sm={2}>
                            <FormGroup className="mb-3">
                                <img src={avatar} width={160} height={120}></img>
                            </FormGroup>
                        </Col>                   
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}
