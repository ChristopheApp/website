import React from "react";
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import bgFooter from '../assets/footer/footer.svg'

export default function Footer() {

    const Footer = styled.footer`
        display: flex;
        justify-content: center;
        align-items: center;

        background-image: url(${bgFooter});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 100%;
        min-height: 400px;

        z-index: 9;
    `

    
const Item = styled(Paper)({
    textAlign: 'center',
  });

    return (
        <>
            <Footer >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 18 }}
                >
                    <Item>LinkedIn 1</Item>
                    <Item>GitHub 2</Item>
                    <Item>Email 3</Item>
                </Stack>
            
            </Footer>
        </>
    );
}