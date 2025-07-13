
import './App.css';
import { useEffect } from 'react';
import { useUserStore } from './store/userStore';
import Auth from './components/auth/Auth';
import User from './components/User';

function App() {

  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <Auth />;
  return <User />;
  
}
export default App
