import React, { Component } from "react";
import "./index.css";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    cardName: "Google",
                    cardImg: "fa fa-google",
                    cardText: "22344",
                },
                {
                    cardName: "Facebook",
                    cardImg: "fa fa-facebook",
                    cardText: "22344",
                },
                {
                    cardName: "Amazon",
                    cardImg: "fa fa-amazon",
                    cardText: "22344",
                },
            ],
        };
    }
    render() {
        return (
            <div className="card-container">
                {this.state.cards.map((card) => (
                    <div className="cards">
                        <div className="card-head-img">
                            <div className="card-heading">
                                <span>{card.cardName}</span>
                            </div>
                            <div className="card-logo">
                                <i className={card.cardImg}></i>
                            </div>
                        </div>
                        <div className="card-text">
                            <span>{card.cardText} USD</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default Cards;
