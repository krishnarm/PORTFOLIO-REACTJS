import React from 'react';

import { 
    PortfolioTag, Container, Title, Content,
    Card, Box, H3, H4, Image, Brief
} from './styles';

import Contact from '../../pages/Contact';

export default function Portfolio() {
    return (
        <>
            <PortfolioTag id="portfolio">
                <Container>
                    <Title>Portfolio</Title>

                    <Content>
                        <Card>
                            <Box>
                                <H3>Leave Management System</H3>
                                <H4>Web Application</H4>
                                <Brief>This leave application will help the higher level officers in an organisation to determine the performance of a particaulr employee based on the type and number of leaves taken by each individual. It is a complete LMS system developed right from scratch where I was guiding a couple of junior developers in the project. (Link available upon request).<br /><br /><br /><br /><hr/> TechStack: ReactJS,Redux, JSX, CSS, Bootstrap 4.0, Material UI, Java, Springboot micro-services, MariaDB,AWS. </Brief>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <H3>Inventory Management</H3>
                                <H4>Web Application</H4>
                                <Brief>Inventory management was developed for a pharmacy client who was in need of a local desktop application, which gave me an experience to build light-weight application. It handled several operations like tracking inventory levels, orders, sales and deliveries. It can also be used in other manufacturing industries as it has the ability to act as an invouce generator as well.(Link available upon request).<br /><br /><br /><br /><hr/> TechStack: PHP Laravel, JQuery, SQL, Bootstrap, CSS, XAMPP, JSON </Brief>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <H3>School ERP</H3>
                                <H4>Web Application</H4>
                                <Brief>SchoolERP application was the first ever project when I started working as a developer. It is a heavy application which has 1000-1300 users of 5 different suer types. The Wwb app consisted of several significant components like fee payment, E-mail communication, Assignment download, submission and assessment tool. The ERP was not only made for one particular school, but it was developed for a group of schools. (Link available upon request)<br /><hr/>TechStack: Angular 6,Typescript, HTML5, CSS, Bootstrap 4.0, Material UI, Java, Springboot micro-services, MariaDB,AWS.</Brief>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <H3>E-mail</H3>
                                <H4>Web Application</H4>
                                <Brief>This is just another email application that was for an In-house purpose. The motive to develop the application is to cut down the third party mail server costs. so that the organisation can use the developed mail server in various applciations where a communication portal will be used. <br /><br /><hr/> TechStack: Angular 6,Typescript, HTML5, CSS, Bootstrap 4.0, Material UI, Java, Springboot micro-services, MariaDB,AWS. <br /><br /><br /></Brief>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <H3>Face recognised attendance system</H3>
                                <H4>Software Application</H4>
                                <Brief>This is a unique software where the student's attendance is rolled with their own face. Firstly, the machine is put to learn every student's face. When a face appears, the machine quickly matches the face with it's results in database to roll the attendance. This saves a lot of paperworks, manual labour thus providing accurate results. The application hasn't reached the production phase yet.<br /><br /><br /><br /> </Brief>
                            </Box>
                        </Card>

                        <Card>
                            <Box>
                                <H3>Real Estate Management System</H3>
                                <H4>Web Application</H4>
                                <Brief>This real estate management system contains all the basic components to list a property either to rent/buy/sell. It was the first applciation I self-built as a developer while learning the MEAN (Mongo, ExpressJS, Angular and Node) stack. Building the application gave me a better understanding about the several development phases in a software development lifecycle. <br /><hr/>TechStack: Angular 6, Typescript, HTML5, CSS, Bootstrap 4.0, Material UI, Java, Springboot micro-services, MariaDB,AWS.   </Brief>
                            </Box>
                        </Card>
                    </Content>
                </Container>
            </PortfolioTag>

            <Contact />
        </>
    );
}