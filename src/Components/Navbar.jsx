import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="flex items-center gap-2">
          <FaUserMd className="text-xl" />
          <span className="text-xl font-bold">MedBook</span>
        </Link>
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}