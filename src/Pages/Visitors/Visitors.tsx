/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Page } from "../Page";
import { Card, Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

export const Visitors = () => {
    const[txtsearch, setSearch] = useState('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmitSearch = async () => {
        alert(txtsearch);
    };
        
    return (
        <Page>
            <Container fluid>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title style={{ padding: 20 }}>Pesquisa de Visitantes</Card.Title>
                            <Card.Body>
                                <Form>
                                    <Form.Group className='mb-3' controlId='formSearchVisitor'>
                                        <InputGroup className='mb-3'>
                                            <Form.Control aria-label='txtsearch'
                                                placeholder='digite n. documento ou nome'
                                                aria-describedby='basic-addon2'
                                                onChange={handleSearchInputChange}
                                            ></Form.Control>
                                            <Button variant='danger' 
                                                id='btnSearch'
                                                onClick={handleSubmitSearch}
                                                >Pesquisar</Button>
                                        </InputGroup>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Page>
    );
}