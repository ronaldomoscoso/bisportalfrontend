/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import React from "react";
import { PageTitle } from "./PageTitle"

interface Props {
    title?: string;
    children: React.ReactNode;
};

export const Page = ({ title, children}: Props) => (
    <div css={css`
        margin: 20px 0px 20px 0px;
        padding: 30px 10px;
        max-width: 100%;
    `}>
        {title && <PageTitle>{title}</PageTitle>}
        {children}
    </div>
);