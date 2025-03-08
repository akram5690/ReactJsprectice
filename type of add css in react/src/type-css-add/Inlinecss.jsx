import React from 'react'

const Inlinecss = () => {
    return (
        <div>
            <header className="head">
                <nav className="nav-bar" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: "80px",
                    padding: "0 30px",
                    backgroundColor: "#333",
                    color: "white"
                }}>
                    <div className="logo" style={{ margin: "0 20px" }}>
                        <h1 style={{ fontSize: "2.2rem", fontWeight: "900", color: "white" }}>G@cars</h1>
                    </div>
                    <div className="src-cont" style={{ width: "40%", display: "flex", alignItems: "center" }}>
                        <input
                            className='src'
                            style={{
                                width: "80%",
                                height: "35px",
                                borderRadius: "10px",
                                padding: "5px",
                                border: "1px solid #ccc"
                            }}
                            type="text"
                            id="src"
                            placeholder="Search..."
                        />
                        <button
                            style={{
                                width: "15%",
                                height: "37px",
                                borderRadius: "10px",
                                marginLeft: "5px",
                                backgroundColor: "#ff9800",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <div className="list-cont" style={{ width: "30%" }}>
                        <ul style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 0,
                            margin: 0
                        }}>
                            <li style={{ listStyle: "none" }}>
                                <a href="#" style={{
                                    backgroundColor:"#333",
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "1.1rem",
                                    padding: "8px 12px",
                                    transition: "0.3s",
                                    borderRadius: "5px"
                                }}
                                >
                                    Home
                                </a>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <a href="#" style={{
                                    backgroundColor:"#333",
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "1.1rem",
                                    padding: "8px 12px",
                                    transition: "0.3s",
                                    borderRadius: "5px"
                                }}

                                >
                                    New Cars
                                </a>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <a href="#" style={{
                                    backgroundColor:"#333",
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "1.1rem",
                                    padding: "8px 12px",
                                    transition: "0.3s",
                                    borderRadius: "5px"
                                }}
                                >
                                    Used Cars
                                </a>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <a href="#" style={{
                                    backgroundColor:"#333",
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "1.1rem",
                                    padding: "8px 12px",
                                    transition: "0.3s",
                                    borderRadius: "5px"
                                }}
                                >
                                    About Us
                                </a>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <a href="#" style={{
                                    backgroundColor:"#333",
                                    textDecoration: "none",
                                    color: "white",
                                    fontSize: "1.1rem",
                                    padding: "8px 12px",
                                    transition: "0.3s",
                                    borderRadius: "5px"
                                }}
                                >
                                    Contect
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Inlinecss
