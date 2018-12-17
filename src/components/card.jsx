import React, { Component } from 'react';
import { Thumbnail, Col, Modal, Button } from 'react-bootstrap';


class Card extends Component {
    constructor(props) {
      super(props);

      this.state = {
        show: false,
        style: {
          background: "white",
        }
      };
    }

    cardClicked = (event) => {
      this.setState({show: true });
    }

    closeModal = (event) => {
      console.log(this.state.show);
      this.setState({show: false});
      console.log(this.state.show);
    }

    cardEnter = (event) => {
      console.log("entering");
      this.setState({style:  {
        background: "lightGray",
      }});
    }

    cardLeave = (event) => {
      console.log("leaving");
      this.setState({style:  {
        background: "white",
      }});
    }

    render() {
      /*
    let demoBtn = null;
    if(props.demo !== ""){
        demoBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.demo}><i className="material-icons right">present_to_all</i> code</a>);
    }
    */
    return(

      <Col lg={3} md={4} sm={6} key={this.props.title} onMouseEnter={this.cardEnter} onMouseLeave={this.cardLeave}>
      <a href={this.props.pdf} style={{textDecoration: 'none'}} target="_blank">
        <Thumbnail style = {this.state.style} src={this.props.src} alt={this.props.alt} onClick={this.cardClicked}>
            <h4>{this.props.title}</h4>
            <p>{this.props.info}</p>
        </Thumbnail>
        </a>
      </Col>
    );
  }
}

export default Card;
