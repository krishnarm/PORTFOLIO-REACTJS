import React from 'react';

import About from '../../pages/About';

import { HomeTag, Container, HomeText, Name, Skill } from './styles';

export default function Home() {
    return (
        <>
            <HomeTag id="home">
                <Container>
                    <HomeText>
                        <Name>Hi !! My name is Krishna Ramanathan</Name>
                        <Skill>Front-End & Web Developer</Skill>
                    </HomeText>
                </Container>
            </HomeTag>

            <About />
        </>
    );
}