import React from 'react';
import styled from '@emotion/styled';

import type { RootState } from '../app/store'
import { useSelector } from 'react-redux'

interface Props {
    children?: React.ReactNode;
}

export default function ProjectsBgStyled({ children}: Props) {

    const darkMode = useSelector((state: RootState) => state.darkMode.value)

    const Section = styled.section`
    width: 100%;
    min-height: 100vh;

    background: ${darkMode 
        ? 'linear-gradient(to bottom,  #160A3A 0%,#090419 100%)' 
        : 'linear-gradient(to bottom,  #233abc 0%,#131f66 100%)'}; 
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

    color: aquamarine;
    z-index: 0;
    `

    return (
        <Section>
            {children}
        </Section>
    )
}