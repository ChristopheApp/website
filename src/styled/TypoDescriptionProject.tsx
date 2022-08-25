// Create un styled-component from Material UI Typofraphy component

import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const TypoStyled = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    //fontSize: '3.2rem',
    width: '100%',

    margin: '0 50px 0 50px',
    color: 'aquamarine',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    '@media (max-width: 600px)': {
        //fontSize: '1.5rem',
        margin: '20px 0 0 0',

    },
});

export default function TypoDescriptionProjectStyled({ children }: any) {
    return (
        <TypoStyled>
            {children}
        </TypoStyled>
    )
}