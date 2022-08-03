import { useState } from "react";
import { Card, Row, Col, FormGroup, FormLabel, InputGroup, Button, Form, Modal, Table } from "react-bootstrap";

interface Props {
    visid: string;
    sitecode: string;
    cardno: string;
}
export const BISCards = (props: Props) => {
    const [show, setShow] = useState(false);
    const [sitecode, setSiteCode] = useState('');
    const [cardno, setCardno] = useState('');

    const handleSiteCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSiteCode(e.target.value);
    }

    const handleCardnoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardno(e.target.value);
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <FormGroup className="mb-3">
                                <FormLabel>SiteCode</FormLabel>
                                <Form.Control
                                placeholder="sitecode"
                                aria-describedby="basic-addon2"
                                id="search"
                                maxLength={5}
                                onChange={handleSiteCodeChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm={3}>
                            <FormGroup className="mb-3">
                                <FormLabel>N. Cartão</FormLabel>
                                <Form.Control
                                placeholder="n. cartão"
                                aria-describedby="basic-addon2"
                                id="search"
                                maxLength={20}
                                onChange={handleCardnoChange}
                                />
                                {props.visid && <Table>
                                    <tbody>
                                        <tr>
                                            <th>teste</th>
                                        </tr>
                                    </tbody>
                                </Table>}
                            </FormGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={() =>setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Pesquisa de Visitantes</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>

    );
}