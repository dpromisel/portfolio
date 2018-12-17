import React from 'react';

import Card from './card.jsx';
import { Row } from 'react-bootstrap';
import workDataArray from '../assets/data/work_data';


export default props=>{

    const cardList = workDataArray.map((item, index) =>{
        return(
            <Card title={item.name} pdf={item.pdf} info={item.info} src={item.img} key={index} alt={item.alt} code={item.codeLink} demo={item.demoLink}/>
        );
    });
    return(
        <section id='work'>
            <h3>Projects</h3>
            <hr/>
            <Row>
            {cardList}
            </Row>
        </section>
    );
}
