import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import { ServicesTag, Container, Title, ServicesContent,
    Card, Box, Icon, H3, Paragraph
} from './styles';

import Skills from '../../pages/Skills';

export default function Services() {
    return (
        <>
            <ServicesTag id="services">
                <Container>
                    <Title>Roles</Title>

                    <ServicesContent>
                        <Card>
                            <Box>
                                <Icon>
                                    <span className="fa fa-laptop"></span>
                                </Icon>

                                <H3>Web Developer</H3>
                                <Paragraph>
                                Experience in designing and developing responsive and well-designed websites, everything tailor-made that would suit the company needs.
                                </Paragraph>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <Icon>
                                    <span className="fa fa-desktop"></span>
                                </Icon>

                                <H3>Front-End Developer</H3>
                                <Paragraph>
                                Experience in designing and developing lightweight Progressive Web Applications (PWA) for the most diverse industries, with a simple and secured UI
                                </Paragraph>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <Icon>
                                    <span className="fa fa-code"></span>
                                </Icon>

                                <H3>Clean Code</H3>
                                <Paragraph>
                                Organized and easy to understand code, using design patterns that facilitate several phases like development, testing, deployment and maintenance of the application.
                                </Paragraph>
                            </Box>
                        </Card>
                    </ServicesContent>
                </Container>
            </ServicesTag>

            <Skills />
        </>
    );
}