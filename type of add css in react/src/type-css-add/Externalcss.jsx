import React from 'react'
import './Extstyle.css'

const Externalcss = () => {
  return (
    <div className='main'>
    <div className="car">
        <div className="image-container">
            <img src="https://gaadiwaadi.com/wp-content/uploads/2020/10/2020-Hyundai-i20-N-Line-3-1068x601.jpg" alt="Car Model 1" />
        </div>
        <div className="details">
            <div className="rate"><span>Rating: 4.5</span> <span>Reviews: 120</span></div>
            <span className="price">$25,000</span>
            <h3 className="heading">Hyundai i20</h3>
            <h5 className="category">Hatchback</h5>
            <p className="description">A stylish and fuel-efficient hatchback.</p>
            <button className="add-to-cart">Inquire Now</button>
        </div>
    </div>

    <div className="car">
        <div className="image-container">
            <img src="https://m.atcdn.co.uk/vms/media/ec878acc13a5488eb8bd045ad0f4844b.jpg" alt="Car Model 2" />
        </div>
        <div className="details">
            <div className="rate"><span>Rating: 4.7</span> <span>Reviews: 200</span></div>
            <span className="price">$30,000</span>
            <h3 className="heading">Skoda Octavia</h3>
            <h5 className="category">Sedan</h5>
            <p className="description">Premium sedan with advanced features.</p>
            <button className="add-to-cart">Inquire Now</button>
        </div>
    </div>

    <div className="car">
        <div className="image-container">
            <img src="https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2023_tata_safari_facelift_exterior_05.jpg" alt="Car Model 3" />
        </div>
        <div className="details">
            <div className="rate"><span>Rating: 4.6</span> <span>Reviews: 180</span></div>
            <span className="price">$35,000</span>
            <h3 className="heading">Tata Safari</h3>
            <h5 className="category">SUV</h5>
            <p className="description">A powerful and spacious SUV with premium features.</p>
            <button className="add-to-cart">Inquire Now</button>
        </div>
    </div>

    <div className="car">
        <div className="image-container">
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/33372/seltos-exterior-left-front-three-quarter.jpeg?q=80" alt="Car Model 4" />
        </div>
        <div className="details">
            <div className="rate"><span>Rating: 4.8</span> <span>Reviews: 250</span></div>
            <span className="price">$28,000</span>
            <h3 className="heading">Kia Seltos</h3>
            <h5 className="category">Compact SUV</h5>
            <p className="description">A stylish and feature-packed compact SUV.</p>
            <button className="add-to-cart">Inquire Now</button>
        </div>
    </div>

    <div className="car">
        <div className="image-container">
            <img src="https://www.financialexpress.com/wp-content/uploads/2022/04/2022-Mercedes-Benz-C-Class.jpg" alt="Car Model 5" />
        </div>
        <div className="details">
            <div className="rate"><span>Rating: 4.9</span> <span>Reviews: 320</span></div>
            <span className="price">$50,000</span>
            <h3 className="heading">Mercedes-Benz C-Class</h3>
            <h5 className="category">Luxury Sedan</h5>
            <p className="description">A high-performance luxury sedan with a premium interior.</p>
            <button className="add-to-cart">Inquire Now</button>
        </div>
    </div>

    <div className="car">
        <div className="image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/2015_Lamborghini_Huracan_5.2.jpg" alt="Car Model 6" />
        </div>
        <div className="details">
            <div className="rate"><span>Rating: 5.0</span> <span>Reviews: 500</span></div>
            <span className="price">$250,000</span>
            <h3 className="heading">Lamborghini Huracan</h3>
            <h5 className="category">Supercar</h5>
            <p className="description">A high-performance supercar with breathtaking speed.</p>
            <button className="add-to-cart">Inquire Now</button>
        </div>
    </div>
</div>


  )
}
export default Externalcss
