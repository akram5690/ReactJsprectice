import React from 'react'
import './card.css'


const Card = () => {
     const carData = [
        {
          image: "https://gaadiwaadi.com/wp-content/uploads/2020/10/2020-Hyundai-i20-N-Line-3-1068x601.jpg",
          rating: "4.5",
          reviews: "120",
          price: "$25,000",
          model: "Hyundai i20",
          category: "Hatchback",
          description: "A stylish and fuel-efficient hatchback."
        },
        {
          image: "https://m.atcdn.co.uk/vms/media/ec878acc13a5488eb8bd045ad0f4844b.jpg",
          rating: "4.7",
          reviews: "200",
          price: "$30,000",
          model: "Skoda Octavia",
          category: "Sedan",
          description: "Premium sedan with advanced features."
        },
        {
          image: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2023_tata_safari_facelift_exterior_05.jpg",
          rating: "4.6",
          reviews: "180",
          price: "$35,000",
          model: "Tata Safari",
          category: "SUV",
          description: "A powerful and spacious SUV with premium features."
        },
        {
          image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-left-front-three-quarter.jpeg?q=80",
          rating: "4.8",
          reviews: "250",
          price: "$28,000",
          model: "Kia Seltos",
          category: "Compact SUV",
          description: "A stylish and feature-packed compact SUV."
        },
        {
          image: "https://www.financialexpress.com/wp-content/uploads/2022/04/2022-Mercedes-Benz-C-Class.jpg",
          rating: "4.9",
          reviews: "320",
          price: "$50,000",
          model: "Mercedes-Benz C-Class",
          category: "Luxury Sedan",
          description: "A high-performance luxury sedan with a premium interior."
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2015_Lamborghini_Huracan_5.2.jpg",
          rating: "5.0",
          reviews: "500",
          price: "$250,000",
          model: "Lamborghini Huracan",
          category: "Supercar",
          description: "A high-performance supercar with breathtaking speed."
        }
      ];
    return (
        <>
             <div className='main'>
      {carData.map((car, index) => (
        <div className="car" key={index}>
          <div className="image-container">
            <img src={car.image} alt={car.model} />
          </div>
          <div className="details">
            <div className="rate">
              <span>Rating: {car.rating}</span>
              <span>Reviews: {car.reviews}</span>
            </div>
            <span className="price">{car.price}</span>
            <h3 className="heading">{car.model}</h3>
            <h5 className="category">{car.category}</h5>
            <p className="description">{car.description}</p>
            <button className="add-to-cart">Inquire Now</button>
          </div>
        </div>
      ))}
    </div> 
    </>
  )
}

export default Card
