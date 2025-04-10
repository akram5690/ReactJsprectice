import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const addminlogin = JSON.parse(sessionStorage.getItem("addminlogin"));

    const isAdmin = () => {
        return addminlogin?.email === "shaikhakram5690@gmail.com" && addminlogin?.pass === "a@12345";
    };


    const handleLogout = () => {
        sessionStorage.removeItem("addminlogin");
        sessionStorage.removeItem("logdata");
        navigate("/");
    };

    const navitems = [
        { pathname: "Home", path: "/Home" },
        { pathname: "Login", path: "/" },
        { pathname: "Create Account", path: "/Register" },
    ];

    if (isAdmin()) {
        navitems.push({ pathname: "Employee", path: "/Empdata" });
    }

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-md">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden lg:flex lg:gap-x-12">
                        {navitems.map(item => (
                            <li key={item.pathname}>
                                <NavLink
                                    to={item.path}
                                    className="text-base font-semibold text-gray-700 hover:text-indigo-600"
                                >
                                    {item.pathname}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleLogout} className='cursor-pointer'>LogOut</button>
                </nav>
            </header>
        </>
    )
}

export default Navbar;