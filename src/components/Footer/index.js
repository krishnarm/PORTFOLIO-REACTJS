import React from 'react';

import {  
    FooterTag, Container, FooterContent, Box, 
    Icon, H4, Paragraph, Social
} from './styles';

export default function Footer() {
    return (
        <FooterTag>
            <Container>
                <FooterContent>
                    <Box>
                        <Icon>
                            <span className="fa fa-phone"></span>
                        </Icon>
                        <H4>Phone</H4>
                        <Paragraph>+1(437)246-8188</Paragraph>
                    </Box>

                    <Box>
                        <Icon>
                            <span className="fa fa-envelope"></span>
                        </Icon>
                        <H4>E-mail</H4>
                        <Paragraph>krishnarm670@gmail.com</Paragraph>
                    </Box>

                    <Box>
                        <Icon>
                            <span className="fa fa-map-marker"></span>
                        </Icon>
                        <H4>Location</H4>
                        <Paragraph>Toronto, Ontario, Canada</Paragraph>
                    </Box>
                </FooterContent>

                <Social>
                    <ul>
                        <li><a href="https://www.facebook.com/krishhiee/" target="_blank"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="https://www.linkedin.com/in/krishna-ramanathan-35905a7a/" target="_blank"><span className="fa fa-linkedin"></span></a></li>
                        <li><a href="https://github.com/krishnarm" target="_blank"><span className="fa fa-github"></span></a></li>
                        <li><a href="https://stackoverflow.com/users/11236189/krishna-ram" target="_blank"><span className="fa fa-stack-overflow"></span></a></li>
                    </ul>
                </Social>
            </Container>
        </FooterTag>
    );
}