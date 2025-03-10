import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dependence = () => {
    const btn = document.getElementById("btn");
    const changecolor = () => {
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
    }
    return (
        <>
            <Card style={{ width: "18rem", margin: "20px auto", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "10px" }}>
                <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                    style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                />
                <Card.Body>
                    <Card.Title>Delicious Burger</Card.Title>
                    <Card.Text style={{color: "black"}}>
                        Savor the juiciness of our signature burger, crafted with fresh ingredients and bursting with flavor.
                    </Card.Text>
                    <Button id='btn' variant="primary" onClick={changecolor}>Order Now</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Dependence
