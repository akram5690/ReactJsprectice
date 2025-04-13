import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        image: "",
        title: "",
        text: "",
        rate: "",
        link: ""
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/cards", {
            method: "POST",
            body: JSON.stringify(product)
        });
        alert("Submitted Product:");

        setProduct({
            image: "",
            title: "",
            text: "",
            rate: "",
            link: ""
        });
        navigate("/Shopcard")
    };


    return (
        <>
            <form className='w-75 mx-auto' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image URL</label>
                    <input type="text" className="form-control" id="image" name="image" value={product.image} onChange={handleChange} placeholder="Enter image url"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Product Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={product.title} onChange={handleChange} placeholder="Enter Title"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Description</label>
                    <input type="text" className="form-control" id="text" name="text" value={product.text} onChange={handleChange} placeholder="Enter Product detail"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="rate" className="form-label">Price</label>
                    <input type="text" className="form-control" id="rate" name="rate" value={product.rate} onChange={handleChange} placeholder="Enter Price"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit Product</button>
            </form>
        </>
    );
};

export default Addproduct;
