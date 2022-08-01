/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from "react";
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Page } from "./Page";
import { PageTitle } from "./PageTitle"

export const Login = () => {
    return (
        <Page>
            <div css={css`
                display: flex;
                align-items: center;
                justify-content: center;
            `}>
                <CardGroup>
                    <Card.Body>
                        <Card.Img src='./wwww/assets/img/gallery/bird.jpg'>

                        </Card.Img>
                        <Card.Title>
                            Card Header
                        </Card.Title>
                        <Card.Text>
                            Card Text
                        </Card.Text>
                    </Card.Body>
                </CardGroup>
            </div>
        </Page>
        )
    
};