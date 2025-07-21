
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';

const Header = () => {
  const user = useUserStore((state) => state.user);
  const signOut = useUserStore((state) => state.signOut);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  }

  return(
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      
      <h1 className='text-lg font-bold'>
        <Link to="/"> 📦 Marketplace </Link>
      </h1>

      {user && (
        <nav className="flex gap-4 items-center">
          <Link to="/user" className="hover:underline"> Mina Items </Link>
          <Link to="/browse" className='hover:underline'> Sök </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logga ut
          </button>
        </nav>
      )}

    </header>
  );

}
export default Header;