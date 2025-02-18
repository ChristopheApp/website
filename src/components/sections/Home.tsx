import React from "react";
import styled from '@emotion/styled';

interface Props {
    children?: React.ReactNode;
  }

export default function Home({ children }: Props) {

    const Section = styled.section`
    width: 100%;
    min-height: 150vh;

    @media screen and (max-width: 1400px) {
        min-height: 100vh;

    `

    return(
        <Section>
            {/* <Bubbles3 /> */}

            {children}   
         </Section>
    )
}
