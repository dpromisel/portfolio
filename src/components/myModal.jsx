import React, { Component } from 'react';
import { Thumbnail, Col, Modal, Button } from 'react-bootstrap';


class MyModal extends Component {
  constructor(props) {
    super(props);
  }

  style = {listStyleType: 'circle'};

  challenges = this.props.challenges.map((item,index) =>{
      return(
        <li key={index}>{item}</li>
      );
  });

  takeaways = this.props.keys.map((item, index) =>{
    return(
      <li key={index}>{item}</li>
    );
  });

  read_more = () => {
    if (this.props.pdf !== "")  {
      return (
        <a href={this.props.pdf} style={{textDecoration: 'none'}} target="_blank">
          <Button>Read More</Button>
        </a>
      );
    }
  }

  demo = () => {
    if (this.props.demo !== "")  {
      return (
        <a href={this.props.demo} style={{textDecoration: 'none'}}>
            <Button>Demo</Button>
        </a>
      );
    }
  }

  render() {

    return(
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title> {this.props.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4> Inspiration </h4>
        <p> {this.props.info} </p>
        <h4>Challenges</h4>
        <ul>
          {this.challenges}
        </ul>
        <h4>Key Takeaways</h4>
        <ul styles = {this.style}>
          {this.takeaways}
        </ul>
      </Modal.Body>

      <Modal.Footer>
        {this.read_more()}
        {this.demo()}
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>
    );
  }
}

export default MyModal;
