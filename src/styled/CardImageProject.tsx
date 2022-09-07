import * as React from 'react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgsProjectsStyled from './ImgsProjectsStyled';
import ImgButtonShowProject from '../components/ImgButtonShowProject';
import ImgButtonGHProject from '../components/ImgButtonGHProject';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkStyled from './LinkStyled';

type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}

interface Props {
    projet: projet;
    onClick?: () => void;
}

export default function CardImageProject({ projet, onClick }: Props) {

    const Div = styled.div`
        display: flex;
        flex-direction: row;

        cursor: pointer;

        position: absolute;
        bottom: -28px;
        right: -35px;
        z-index: 1;
        `

    return (
        <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
            <div style={{ position: 'relative' }}>

                <ImgsProjectsStyled onClick={onClick} src={require(`../assets/screens/${projet.img}`)} alt={projet.name} />
                <Div>
                    {projet.link !== "" ? <ImgButtonShowProject to={projet.link} src={require('../assets/buttons/show_button.png')} alt="Voir le site" />
                        : null}
                    {projet.github !== "" ? <ImgButtonGHProject to={projet.github} src={require('../assets/buttons/github_button.png')} alt="Voir le github" />
                        : null}                    </Div>
            </div>
        </Box>
    );
}