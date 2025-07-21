
import './App.css';
import { useEffect } from 'react';
import { useUserStore } from './store/userStore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Auth from './components/auth/Auth';
import User from './components/User';
import Browse from './components/layout/Browse';

function App() {

  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);

  return(
    <Router>
      <Header />
      <Routes>
        {!user ? (
          <Route path="*" element={ <Auth/> } />
        ) : (
          <>
            <Route path="/user" element={ <User /> } />
            <Route path="/browse" element={ <Browse /> } />
            <Route path="*" elemnt={ <User/> } />
          </>
        )}
      </Routes>
    </Router>
  );


  
}
export default App
