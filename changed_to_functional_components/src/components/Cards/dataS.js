import React, { Component } from 'react';
import ssd from './ssd';

export default class dataS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }

        //this.getItems = this.getItems.bind(this);
    }

    //async componentDidMount() {
    //    await this.getItems();
    //}

    //async getItems() {
    //    let db = new fireDB();
    //    let items = await db.readFromDb();
    //    this.setState({data: items })
    //    console.log(this.state)
    //}

    render() {

        var dataArray = [];
        for (var i = 0; i < 3; i++) {
            dataArray.push(<ssd data={this.state} key={i} />);
        }

        return (
            <div>
                
            </div>
            )
    }
}