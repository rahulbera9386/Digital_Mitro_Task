import { useState, useEffect } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const navbarItems = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full h-28 z-50 flex items-center justify-around px-8 py-4 transition-all duration-300 ${isScrolled ? "bg-[#051922] shadow-md" : "bg-transparent"}`}>
      <div className="text-2xl font-bold text-orange-500 cursor-pointer">Fruitkha</div>
      
      <div>
        <ul className="flex space-x-4">
          {navbarItems.map((item, index) => (
            <li key={index} className="cursor-pointer transition ease-in-out duration-300">
              <p className="text-lg text-white hover:text-orange-500">{item}</p>
            </li>
          ))}
          <Link to="/products" className='text-white hover:text-orange-500'>Product</Link>
        </ul>
      </div>
      
      <div className="flex gap-4">
        <FaCartShopping size={22} color='white'/>
        <CiSearch size={22} color='white'/>
      </div>
    </nav>
  );
};

export default Navbar;
