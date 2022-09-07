import React from 'react';
import styled from '@emotion/styled';

import hublot from '../assets/hublot.png';

import screen from '../assets/screens/masques-screen.png';

interface Props {
  src?: string;
  alt?: string;
  to?: string;
}

export default function ImageButtonProject({ src, alt, to }: Props) {

  const A = styled.a`
    widht: 11.7%;
    height: 19.2%;
    cursor: pointer;

    z-index: 1;
    `

  return (
    <>
      <A href={to} rel="noreferer" target="blank">
        <img src={src} alt={alt} />
      </A>
    </>
  );
}