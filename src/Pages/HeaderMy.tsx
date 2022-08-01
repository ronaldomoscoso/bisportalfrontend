/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export const HeaderMy = () => {
    return (
        <div css={css`
            position: fixed;
            box-sizing: border-box;
            top: 0%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            background-color: #fff;
            border-bottom: 1px solid;
            box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
        `}>
            <Button>Visitantes</Button>
        </div>
    );
}