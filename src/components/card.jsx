import React, { Component } from 'react';
import { Thumbnail, Col, Button } from 'react-bootstrap';
import MyModal from './myModal.jsx';



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

    openModal = (event) => {
      this.setState({
        show: true,
        style:  {
          background: "white",
        }
      });
    }

    cardEnter = (event) => {
      this.setState({style:  {
        background: "lightGray",
      }});
    }

    cardLeave = (event) => {
      this.setState({style:  {
        background: "white",
      }});
    }

    closeModal = () => this.setState({ show: false });

    render() {
      /*
    let demoBtn = null;
    if(props.demo !== ""){
        demoBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.demo}><i className="material-icons right">present_to_all</i> code</a>);
    }
    */
    /*
    if (this.props.demo === "") {
      return(
        <Col lg={3} md={4} sm={6} key={this.props.title} onMouseEnter={this.cardEnter} onMouseLeave={this.cardLeave}>
        <a href={this.props.pdf} style={{textDecoration: 'none'}} target="_blank">
          <Thumbnail style = {this.state.style} src={this.props.src} alt={this.props.alt}>
              <h4>{this.props.title}</h4>
              <p>{this.props.info}</p>
          </Thumbnail>
          </a>
        </Col>
      );
    } else {
      */
      return(
        <Col md={6} sm={6} lg={6} key={this.props.title} onMouseEnter={this.cardEnter} onMouseLeave={this.cardLeave}>
          <Thumbnail style = {this.state.style} src={this.props.src} alt={this.props.alt} onClick={this.openModal}>
              <h4>{this.props.title}</h4>
          </Thumbnail>

          <MyModal
          show={this.state.show}
          onHide={this.closeModal}
          title={this.props.title}
          info={this.props.info}
          challenges={this.props.challenges}
          keys={this.props.takeaways}
          pdf={this.props.pdf}
          pdf_link={this.props.pdf_link}
          demo={this.props.demo}
          details={this.props.details}>
          </MyModal>

        </Col>
      );
  }
}

export default Card;
