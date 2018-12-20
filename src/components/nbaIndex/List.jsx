import React, {Component} from 'react';
import { Thumbnail, Col } from 'react-bootstrap';


class List extends Component {


  renderList() {
    const items = this.props.items.map(item => {
      return (<Col xs={6} md={3} key={item.Franchise}>
        <Thumbnail src={item.Image} alt={item.Franchise} >
          <h3>{item.Franchise}</h3>
          <p>Championships: {item.Champ}</p>
          <p>Conference Titles: {item.CTitles}</p>
          <p>Division Titles: {item.DTitles}</p>
          <p>Win/Loss: {item.WL}</p>
          <p>Founded: {item.From}</p>
        </Thumbnail>
      </Col>);
    });

    return items;
  }


  render() {
      return (
        <ul>
          {this.renderList()}
        </ul>
      );
    }
}

export default List;
