import React from 'react';

import me from '../../assets/images/krish.png';

import Services from '../../pages/Services';

import { 
    AboutSection, Container, Title, AboutContents,
    Imgs, Image, Description, Name, Ocupation, Text,
    ButtonCV
} from './styles';

export default function About() {
    return (
        <>
            <AboutSection id="about">
                <Container>
                    <Title>About me</Title>

                    <AboutContents>
                        <Imgs>
                            <Image 
                                src={me}
                                alt="me"
                            />
                        </Imgs>

                        <Description>
                            
                            <Ocupation>I’m Krishna. I'm a 24-year old web developer and software engineer</Ocupation>
                            <Text>
                            In 2017, I started my professional career as a Data Analyst(DA) at Sydney, Australia. Being a DA, I was into generating Competitive Reports to the Top management of various Companies to analyze market competition. <br /><br />
                            In early 2019, I weaned on becoming a Software Developer. Because I was passionate to innovate new technology (any alternative word)---------- products. By mid-2019 I started working as an aeonian Software Developer creating 6-8 applications.
                            </Text>
                            
                            <Text>
                                <ButtonCV target="_blank" href="https://drive.google.com/file/d/1eA_KNfk7RR8F8oefpO33tcT0lBw5wg-y/view?usp=sharing" title="Opens in new tab"><i className="fa fa-eye"></i> View CV</ButtonCV>
                            </Text>
                        </Description>
                    </AboutContents>
                </Container>
            </AboutSection>

            <Services />
        </>
    );
}