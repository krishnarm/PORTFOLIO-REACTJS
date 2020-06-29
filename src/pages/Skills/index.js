import React from 'react';

import { SkillsTag, Container, Title, SkillsContent,
    Card, Label, Progress, Inner
} from './styles';

import Portifolio from '../../pages/Portifolio';

export default function Skills() {
    return (
        <>
            <SkillsTag id="skills">
                <Container>
                    <Title>Skills</Title>

                    <SkillsContent>
                        <Card>
                            <Label>JavaScript</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Angular 9</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>ReactJS</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>AWS</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>HTML5,CSS</Label>
                            <Progress>
                                <Inner style={{ width: '90%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Hooks</Label>
                            <Progress>
                                <Inner style={{ width: '65%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Thunk</Label>
                            <Progress>
                                <Inner style={{ width: '65%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Java</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Redux</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>WebPack</Label>
                            <Progress>
                                <Inner style={{ width: '80%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Micro-Services</Label>
                            <Progress>
                                <Inner style={{ width: '65%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>

                        <Card>
                            <Label>Python 3.0</Label>
                            <Progress>
                                <Inner style={{ width: '65%' }}>
                                        
                                </Inner>
                            </Progress>
                        </Card>
                    </SkillsContent>
                </Container>
            </SkillsTag>

            <Portifolio />
        </>
    );
}