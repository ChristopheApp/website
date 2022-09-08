import styled from '@emotion/styled';

interface Props {
    src?: string;
    alt?: string;
    to?: string;
}

export default function ImageButtonProject({src, alt, to}: Props) {

    const A = styled.a`
    width: 74.56px;
    height: 67.98px;
    cursor: pointer;


    z-index: 1;
    `

  return (
    <>
        <A href={to} target="blank">
        <img src={src} alt={alt} />
        </A>
    </>
  );
}