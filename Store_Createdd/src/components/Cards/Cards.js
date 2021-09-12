import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useStateValue } from '../ContextApi/StateProvider';

const Cards = () => {
    var cardsSeedArray = [];
    for (var i = 0; i < 3; i++) {
        cardsSeedArray.push(<Data key={i} />);
    }

    return <div className="container d-flex">
        {cardsSeedArray.map(card => card)}
    </div>
}

const Data = (key) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            items: {
                key: key
            },
        })
    }

    return <div key={key} className="container">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://s12emagst.akamaized.net/products/25152/25151183/images/res_a7cdb843072c8155cc20cca65b3c849b_200x200_lj47.jpg" />
            <Card.Body className="text-center">
                <Card.Title>Gigabyte Radeon™ RX 5700</Card.Title>
                <Card.Text>
                    Видео карта Gigabyte Radeon™ RX 5700 GAMING OC, 8GB GDDR6, 256-bit
    </Card.Text>
                <Button onClick={addToBasket} variant="primary" >Add to basket</Button>
            </Card.Body>
        </Card>
    </div>
}

export default Cards;