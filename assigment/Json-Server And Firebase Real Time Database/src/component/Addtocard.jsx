import React, { useEffect, useState } from 'react'

const Addtocard = () => {
    const [addcard, setaddcard] = useState([]);

    useEffect(() =>{
        let update = JSON.parse(localStorage.getItem("adproduct")) || []
        setaddcard(update);
    },[])

    const handledelete = (id) =>{
        let filterdata = addcard.filter(item => item.id !== id)
        setaddcard(filterdata)
        localStorage.setItem("adproduct", JSON.stringify(filterdata))
    }
    return (
        <>
            <div className="container my-5">
        <h1 className="text-center mb-4">🛒 Your Cart</h1>
        {addcard.length > 0 ? (
          addcard.map((item, index) => (
            <div className="card mb-3" style={{ maxWidth: "540px" }} key={index}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      {item.description.length > 100
                        ? item.description.substring(0, 100) + "..."
                        : item.description}
                    </p>
                    <h6 className="mt-2">Price: ${item.price}</h6>
                    <button onClick={() => handledelete(item.id)} className="btn btn-danger mt-3">Delete Item</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center text-muted">Cart is Empty 🛒</h3>
        )}
      </div>
        </>
    )
}

export default Addtocard
