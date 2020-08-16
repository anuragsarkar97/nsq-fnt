import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Input, Layout, message, Row, Space} from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/landing.scss'
import Modal from "antd/es/modal";

class Landing extends Component {

    constructor(props) {
        super(props);
        AOS.init({duration: 800});
        this.state = {
            loginModalVisible: false,
            loginModalLoading: false,
            registerModalVisible: false,
            registerModalLoading: false,
            invalidLogin: false,
            name: null,
            collage: null,
            phone_number: null,
            email: null,
            country: null,
            consent: false
        };
    }

    showEntryModal = () => {
        this.setState({
            registerModalVisible: true,
        });
    };


    handleRegisterOk = e => {
        this.setState({
            registerModalLoading: true,
        });
        fetch("https://no33lfusn4.execute-api.ap-south-1.amazonaws.com/Prod/execute", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": this.state.name,
                "college_name": this.state.collage,
                "phone": this.state.phone_number,
                "email": this.state.email,
                "country": this.state.country,
                "consent": this.state.consent
            })
        })
            .then(res => {
                if (res.status >= 400 && res.status < 500) {
                    message.error("Ohho !!! some issues")
                } else if (res.status >= 500) {
                    message.error("Ohho !!! something broke !")
                } else {
                    message.success("Awesome! Someone from the team will get to you :)")
                }
                this.setState({registerModalVisible: false, registerModalLoading: false});
            })
            .catch(e => {
                this.setState({registerModalLoading: false});
                message.error("Ohho! some error on owr side. ")
            })
    };
    handleRegisterCancel = e => {
        this.setState({
            registerModalVisible: false,
        });
    };


    render() {
        const {Header, Footer, Content} = Layout;
        return (
            <div className="main_landing_div">
                <Layout>
                    <Header className="landing_header">
                        <Space className="header_buttons">
                            {/*<Button value="large" className="buttons_top">*/}
                            {/*    Courses*/}
                            {/*</Button>*/}
                            <a href={"#tutor-header"}>
                                <Button value="large" onClick={(e) => {
                                }} className="buttons_top">
                                    Students
                                </Button></a>
                        </Space>
                    </Header>
                    <Content className="landing_content">
                        <Row>
                            <Col md={{span: 24, offset: 0, pull: 1}} lg={{span: 12, offset: 1}}
                                 xs={{span: 24, offset: 0, pull: 1}}>
                                <div className="main_typo" aos="fade" data-aos="fade-up">
                                    We are helping Students become better Software Engineers.
                                </div>
                                <div className="space"></div>
                                <div className="second_type" aos="fade" data-aos="fade-up">
                                    Connecting Students with top Instructors in Programming And Data Structures, Web
                                    Engineering, Machine Learning, and Android Development.
                                </div>
                                <div className="space"></div>
                                <div className="landing_search" aos="fade" data-aos="fade-up">
                                    <Button value="large" className="email_submit_button" onClick={this.showEntryModal}>I
                                        want In</Button>
                                    <Modal
                                        title="Fill up to Know More about it."
                                        visible={this.state.registerModalVisible}
                                        // onOk={this.handleRegisterOk}
                                        onCancel={this.handleRegisterCancel}
                                        footer={[
                                            <Button key="back" onClick={this.handleRegisterCancel}>
                                                Return
                                            </Button>,
                                            <Button key="submit" type="primary"
                                                    loading={this.state.registerModalLoading}
                                                    onClick={this.handleRegisterOk}>
                                                Submit
                                            </Button>,
                                        ]}
                                    >
                                        <Input onChange={(e) => {
                                            this.setState({email: e.target.value})
                                        }} placeholder="Email Address (Required)"/>
                                        <br/>
                                        <br/>
                                        <Input onChange={(e) => {
                                            this.setState({name: e.target.value})
                                        }} placeholder="Full Name (Required)"/>
                                        <br/>
                                        <br/>
                                        <Input onChange={(e) => {
                                            this.setState({phone_number: e.target.value})
                                        }} placeholder="Phone Number (Required)"/>
                                        <br/>
                                        <br/>
                                        <Input onChange={(e) => {
                                            this.setState({collage: e.target.value})
                                        }} placeholder="School/University (Required)"/>
                                        <br/>
                                        <br/>
                                        <Input onChange={(e) => {
                                            this.setState({country: e.target.value})
                                        }} placeholder="Country (Required)"/>
                                        <br/>
                                        <br/>
                                        <Checkbox onChange={(e) => {
                                            this.setState({consent: e.target.checked})
                                        }}>Connect with you over phone/Email</Checkbox>
                                    </Modal>
                                </div>
                            </Col>
                            <Col>
                                {/*<img src={landingImage} className="top-image-landing"/>*/}

                            </Col>
                        </Row>
                    </Content>
                    <Content>
                        <br/>
                        <br/>
                        <p className="tutor-header" id="tutor-header" aos="fade" data-aos="fade-up">
                            Our Tutors Come from
                        </p>
                        <Row justify={"center"}>
                            <Col md={{span: 24}} lg={{span: 12}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <div className="company-images">
                                    <img src="https://img.icons8.com/color/96/000000/microsoft.png"/>
                                    <img src="https://img.icons8.com/officel/96/000000/google-logo.png"/>
                                    <img src="https://img.icons8.com/color/96/000000/mac-os.png"/>
                                </div>
                                <br/>
                            </Col>
                            <Col md={{span: 24}} lg={{span: 12}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <div className="company-images">
                                    <img src="https://img.icons8.com/doodle/96/000000/swiggy.png"/>
                                    <img src="https://img.icons8.com/ultraviolet/96/000000/amazon.png"/>
                                    <img src="https://img.icons8.com/doodle/96/000000/facebook-new.png"/>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <p className="tutor-header" aos="fade" data-aos="fade-up">
                            Testimonials
                        </p>
                        <Row justify="center">
                            <Col md={{span: 24}} lg={{span: 8}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <Card className="testimonial-card" hoverable={true}>
                                    <br/>
                                    <br/>
                                    Great experience from NSquare.
                                    You get a lot of learning opportunities here.
                                    You have to Work hard to get it. Be prepared for everything.
                                    And you might land the next big job.
                                    <br/>
                                    <br/>
                                    <p style={{fontWeight: 'bold'}}>
                                        Dilip - INDIA
                                    </p>
                                </Card>
                                <br/>
                            </Col>
                            <Col md={{span: 24}} lg={{span: 8}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <Card className="testimonial-card" hoverable={true}>
                                    <br/>
                                    <br/>
                                    Amazing Tutors to Learn from, The Course is in depth and covers every corner of the
                                    subject.
                                    The Tutors are really invested into teaching and come from pretty amazing
                                    backgrounds.
                                    I would like to thank everyone in the team for helping me out find a better job
                                    <br/>
                                    <br/>
                                    <p style={{fontWeight: 'bold'}}>
                                        Akshay - INDIA
                                    </p>
                                </Card>
                                <br/>
                            </Col>
                            <Col md={{span: 24}} lg={{span: 8}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <Card className="testimonial-card" hoverable={true}>
                                    <br/>
                                    <br/>
                                    The journey with Nsquare team was awesome. The tutors know very well how to engage
                                    students.
                                    A special thanks to Saurav Sir for for clearing doubts even at odd times, he is
                                    approachable at all hours of the day. I want to thanks
                                    Anish Sir to make my nightmares ( DP problems) a cake walk.
                                    <br/>
                                    <br/>
                                    <p style={{fontWeight: 'bold'}}>
                                        Abhirup - INDIA
                                    </p>
                                </Card>
                                <br/>
                            </Col>

                        </Row>
                    </Content>
                    <br/>
                    <br/>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <Footer className="landing_footer" style={{textAlign: 'center', color: 'white'}}>
                        N Square ©2020 Created by NSquare.dev with ❤️
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Landing;
