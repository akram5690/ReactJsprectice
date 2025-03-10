import React, { Component } from "react";

class StateEx extends Component {
    constructor() {
        super();
        this.state = {
            color: "gray",
        };
    }

    handleChange = () => {
        this.setState({ color: "#9f9eff" });
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button 
                    onClick={this.handleChange} 
                    style={{
                        padding: "10px 15px",
                        backgroundColor: this.state.color,
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Change Color
                </button>
                <p style={{ fontSize: "18px", marginTop: "10px", backgroundColor: this.state.color }}>
                    Selected Color: <strong>{this.state.color}</strong>
                </p>
            </div>
        );
    }
}

export default StateEx;
