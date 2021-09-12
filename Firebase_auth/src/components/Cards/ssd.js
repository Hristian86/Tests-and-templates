import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ssd = (data,key) => {

    return <div key={key} className="container">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://s12emagst.akamaized.net/products/25152/25151183/images/res_a7cdb843072c8155cc20cca65b3c849b_200x200_lj47.jpg" />
            <Card.Body className="text-center">
                <Card.Title>Gigabyte Radeon™ RX 5700</Card.Title>
                <Card.Text>
                    Видео карта Gigabyte Radeon™ RX 5700 GAMING OC, 8GB GDDR6, 256-bit
    </Card.Text>
                <Button variant="primary" >Add to cart</Button>
            </Card.Body>
        </Card>
    </div>

}

export default ssd