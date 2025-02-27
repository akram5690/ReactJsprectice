import React from 'react'

const Inlinecss = () => {
  return (
    <div>
      <header className="head">
        <nav className="nav-bar" style={{display: "flex", justifyContent: "space-between", alignItems:"center", width:"100%", height:"80px"}}>
            <div className="logo" style={{margin:"0 30px"}}>
                <h1 style={{fontSize:"2.2rem", fontWeight:"900"}}>logo</h1>
            </div>
            <div className="src-cont" style={{width:"30%"}}>
                <input className='src'  type="text" id="src" />
                <button>src</button>                
            </div>
            <div className="list-cont">
                <ul style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                    <li style={{listStyle:"none"}}>
                        <a href="#">Home</a>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <a href="#">About</a>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <a href="#">Service</a>
                    </li>
                    <li style={{listStyle:"none"}}>
                        <a href="#">Help</a>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Inlinecss
