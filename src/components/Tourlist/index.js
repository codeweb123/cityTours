import React, { Component } from 'react';
import "./Tourlist.scss";
import Tour from "../Tour/Tour";
import { tourData } from '../tourData';

export default class Tourlist extends 
Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour=> tour.id !==id);
        this.setState({
            tours: sortedTours
        });
//loops through array and uses callback function and applies it to every item in array//
    };
    render() {
        const {tours} = this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return <Tour key={tour.id} tour=
                    {tour} removeTour={this.removeTour} />
                })}
            </section>
        );
    }
}
