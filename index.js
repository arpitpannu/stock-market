import React, { Component } from "react";
import "./index.css";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            isFetching: false,
            allStock: [
                {
                    companyName: "google",
                    companySymbol: "+1cp",
                    marketCap: "$145.4k",
                    currentPrice: "$0.001",
                },
                {
                    companyName: "facebook",
                    companySymbol: "+1cp",
                    marketCap: "$1775.4k",
                    currentPrice: "$0.0301",
                },
                {
                    companyName: "amazon",
                    companySymbol: "+1hpp",
                    marketCap: "$145.4k",
                    currentPrice: "$0.001",
                },
                {
                    companyName: "phonePay",
                    companySymbol: "+1vcp",
                    marketCap: "$145.4k",
                    currentPrice: "$0.11001",
                },
            ],
        };
    }

    // componentDidMount() {
    //     const url =
    //         "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo";
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             this.setState({
    //                 stocks: result.bestMatches,
    //                 isFetching: false,
    //             });
    //             console.log(result.bestMatches[0]);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //             this.setState({ ...this.state, isFetching: false });
    //         });
    // }
    render() {
        return (
            <div className="container">
                <div className="table">
                    <div className="searchDiv">
                        <label>Stock Details Table</label>
                        <input
                            type="text"
                            placeholder="Search by Company Name"
                        />
                    </div>
                    <div className="company-Detail-Table">
                        <div className="table-header">
                            <div className="companyName">Company Name</div>
                            <div className="companySymbol">Company Symbol</div>
                            <div className="marketCap">Market Cap</div>
                            <div className="currentPrice">Current Price</div>
                        </div>
                        {/* {this.state.stocks.map((stock) => (
                            <div className="details">
                                <div className="companyNameText">
                                    {stock.name}
                                </div>
                                <div className="companySymbolText">
                                    {stock.symbol}
                                </div>
                                <div className="marketCapText">
                                    {stock.matchScore}
                                </div>
                                <div className="currentPriceText">
                                    {stock.currency}
                                </div>
                            </div>
                        ))} */}

                        {this.state.allStock.map((stock) => (
                            <div className="details">
                                <div className="companyNameText">
                                    {stock.companyName}
                                </div>
                                <div className="companySymbolText">
                                    {stock.companySymbol}
                                </div>
                                <div className="marketCapText">
                                    {stock.marketCap}
                                </div>
                                <div className="currentPriceText">
                                    {stock.currentPrice}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default Table;
