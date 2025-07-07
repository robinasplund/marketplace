
import './App.css';
import User from './components/User.jsx';
import { useUserStore } from './store/userStore.js';

function App() {

  const users = useUserStore((state) => {return state.users});
  const loggedInUser = useUserStore(state=>state.loggedInUser);
  const addItem = useUserStore(state=>state.addItem);
  const deleteItem = useUserStore(state => state.deleteItem);

  const selectedUser = users.find(user => user.name === loggedInUser);
  
  return (

    <div className="grid grid-cols-1 items-center gap-6 p-8 border">

      <h1>Marketplace</h1>

      {selectedUser ? (
        <User 
          name={selectedUser.name} 
          id={selectedUser.id} 
          items={selectedUser.items} 
          addItem={addItem} 
          deleteItem={deleteItem}
        />
      ):(
        <p>ingen användare hittades</p>
      )}

    </div> 

  );
}
export default App
