import React from 'react';
import splash from '../assets/images/landing/splash.jpg';
import id from '../assets/images/landing/BrID17.jpg';
import { Jumbotron, Button, Panel } from 'react-bootstrap';


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

    <div style = {style}>
      <Panel style={panelStyle}>
        <h1 style={textStyle} >Software Engineer </h1>
        <h1> UI/UX Designer
        </h1>
        <h3> David Promisel </h3>

      </Panel>
    </div>

    /*
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
