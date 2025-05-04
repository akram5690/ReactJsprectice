import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
  const navigate = useNavigate()
  const [Addproduct, setaddproduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
    description: ""
  })

  const handleChange = (e) => {
    setaddproduct({ ...Addproduct, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/product", {
      method: "post",
      body: JSON.stringify(Addproduct)
    })
    alert("Product Add")

    setaddproduct({
      id: "",
      name: "",
      price: "",
      image: "",
      description: ""
    })
    navigate("/")
  }
  return (
    <>
      <div className="login-bg d-flex justify-content-center align-items-center min-vh-100">
        <div className="glass-card p-4 rounded-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
          <h3 className="text-center mb-3 text-white">Welcome Back</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={Addproduct.id} name='id' type="number" className="form-control" placeholder="Id" required />
              <label htmlFor="id">ID</label>
            </div>
            <div className="form-floating mb-4">
              <input onChange={handleChange} value={Addproduct.name} name='name' type="text" className="form-control" placeholder="Product name" required />
              <label htmlFor="name">Product name</label>
            </div>
            <div className="form-floating mb-4">
              <input onChange={handleChange} value={Addproduct.description} name='description' type="text" className="form-control" placeholder="description" required />
              <label htmlFor="description">description</label>
            </div>
            <div className="form-floating mb-4">
              <input onChange={handleChange} value={Addproduct.image} name='image' type="text" className="form-control" placeholder="Product image" required />
              <label htmlFor="image">Product Image</label>
            </div>
            <div className="form-floating mb-4">
              <input onChange={handleChange} value={Addproduct.price} name='price' type="number" className="form-control" placeholder="Price" required />
              <label htmlFor="price">Price</label>
            </div>
            <div className="d-grid mb-2">
              <button type="submit" className="btn btn-light fw-bold">Add product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addproduct
