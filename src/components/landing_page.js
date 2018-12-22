import React from 'react';
import splash from '../assets/images/landing/splash.jpg';
import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';
import resume from '../assets/pdfs/resume.pdf';
import { Jumbotron, Grid, Row, Col, Table, Button } from 'react-bootstrap';


export default props =>{
  let style = {
    backgroundImage: "url(" + splash + ")",
    backgroundSize: 'contain',
    padding: 50,
  }

  let panelStyle = {
    padding: 50,
    opacity: 0.3,
  }

  let textStyle = {
    color: 'black',
  }



  return(

    <Jumbotron>
    <Grid>
      <Row>
        <h1>David Promisel</h1>
        <h4>Software Engineer || User Interface Designer</h4>
      </Row>

      <Row>
      <center>
        <div className="footer-links">
          <a className="" target="_blank" href="https://github.com/dpromisel"><img id="github-logo" src={githubLogo} alt="Github" /></a>
        </div>
        <div className="footer-links">
            <a target="_blank" href="https://www.linkedin.com/in/david-promisel/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /></a>
        </div>
      </center>
      </Row>

      <Row>
        <Col >
          <h4 styles={{fontWeight: 'bold'}}> About Me </h4>
          <p>
          I am a software developer who understands the importance of user
          interface design and a positive user experience on the overall success of an application.
          We all have experience with both the good and the bad when it comes to user interface design and experience.
          We try to avoid those applications that drive us crazy - you can’t navigate efficiently,
          use it how you’d like to, and it’s hard to read or hard on your eyes
          because no one thought about the color scheme or using a standard,
          easy to read font or standard navigation conventions.</p>

          <p className="boldText">
          My goal is to use my understanding of user design principles,
          techniques, modeling, user evaluation and feedback to ensure the systems
          I develop provide a positive user experience.</p>
        </Col>
      </Row>

      <Row>
      <center>
        <a href={resume} style={{textDecoration: 'none'}} target="_blank">
          <Button>Download Resume</Button>
        </a>
        </center>
      </Row>

    </Grid>

    </Jumbotron>
    /*

    <div style = {style}>
      <Panel style={panelStyle}>
        <h1 style={textStyle} >Software Engineer </h1>
        <h1> UI/UX Designer
        </h1>
        <h3> David Promisel </h3>

      </Panel>
    </div>


    <Jumbotron className='landing-img'id="landing" style = {style}>

    <Grid>
    <Row>
    <Col>
    <Thumbnail src={id} responsive circle >
    </Thumbnail>
    </Col>

    <Col>
    <h1>Hello, world!</h1>
    </Col>

    </Row>

    <Row>
    <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
    </p>
    <p>
    <Button bsStyle="primary">Learn more</Button>
    </p>
    </Row>
    </Grid>
    </Jumbotron>
    */
  );
}
