import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Addtocard = () => {
    const location = useLocation();
    const { item } = location.state || {};

    const [count, setCount] = useState(1);

    const carditem = async () => {
        await fetch("http://localhost:5000/addcard", { method: "post", body: JSON.stringify(count) })
    }

    useEffect( () =>{ 
        carditem()
    }, [])

    return (
        <div className="container py-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={item.image}
                            className="img-fluid rounded-start"
                            alt={item.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.text}</p>
                            <p className="card-text">
                                <strong className="text-success">{item.rate}</strong>
                            </p>

                            <div className="d-flex align-items-center gap-2 mt-2">
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                >
                                    -
                                </button>
                                <span className="px-2">{count}</span>
                                <button
                                    className="btn btn-sm btn-outline-success"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <p className="mt-3">
                                <strong>Total: ₹{item.rate * count}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addtocard;
