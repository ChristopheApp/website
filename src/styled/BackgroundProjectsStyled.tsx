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



    color: aquamarine;
    z-index: 0;
    `

    return (
        <Section>
            {children}
        </Section>
    )
}