import { useState } from "react";
import Axios, { summaryApi } from "../api/summaryApi.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {useDispatch} from "react-redux"
import { setUser } from "../redux/auth-slice/index.js";
const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({ ...summaryApi.login, data: formData });
      const data = response.data;
      console.log(data)
      if (data.success) {
        toast.success(data.message);
dispatch(setUser(data.user));
localStorage.setItem("adminToken",data.token)
        setFormData({
          email: "",
          password: "",
        });
       
        navigate("/dashboard/product");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full shadow-md rounded-sm">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="space-y-2 mb-3 flex justify-end">
          <p>Not have an account?<Link to="/auth/register"><span className="underline">Register</span>
          </Link></p>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
