import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { toast } from 'sonner';

const Dashboard = () => {
const {user}=useSelector(state=>state.auth);
const handleLogout=()=>{
  localStorage.removeItem("adminToken");
  toast.success("User Logged Out Successfully");
  navigate("/auth/login")
}
const navigate=useNavigate()

  useEffect(()=>{

  },[user])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-600/90 text-white fixed left-0 h-screen">
        <div className="p-6 text-2xl font-bold border-b border-gray-700 text-center tracking-wide">
          Digital Mitro
        </div>
        <nav className="mt-6 text-center">
          <ul>
            <li>
              <Link
                to="/dashboard/product"
                className="block py-3 px-6 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mx-4 transition duration-300"
              >
                Product
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1  bg-white ml-64">
        <div className="shadow-md mb-4 p-6 flex justify-between items-center">
          <p className="text-center font-medium text-2xl">Dashboard</p>
          <div className="flex items-center gap-4">
            <p className="text-xl font-medium ">{user.name?`Welcome Back ${user.name}`:""}</p>
            {user ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all duration-200"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/auth/login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          Login
        </button>
      )}
            
          </div>
        </div>

        <div className="m-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
