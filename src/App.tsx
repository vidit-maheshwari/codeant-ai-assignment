import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <nav className="mb-8">
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/dashboard"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition duration-300"
              
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition duration-300"
       
            >
              Login Page
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to the Application</h1>
        <p className="text-gray-600 text-lg">Choose an option from the menu above to get started.</p>
      </div>
    </div>
  );
}

export default App;
