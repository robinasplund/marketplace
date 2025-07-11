
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

  if (!user) {
    return <Auth />
  }
  
  return (

    <div className="grid grid-cols-1 items-center gap-6 p-8 border">

      <h1>Marketplace</h1>
   
      <User 
        name={user.email} 
        id={user.id} 
        items={[]} 
        addItem={() => {}} 
        deleteItem={() => {}}
      />
 
    </div> 

  );
}
export default App
