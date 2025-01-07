import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-600/90 text-white">
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
      <main className="flex-1 p-8 bg-white shadow-lg rounded-tl-xl">

        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
