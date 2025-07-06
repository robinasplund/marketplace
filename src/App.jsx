import { useState } from 'react'
import './App.css'
import User from './components/User.jsx'

function App() {

  const [users,setUsers] = useState([
    {
      name: "Göran Andersson",
      id: "0001",
      items: [
        {
          name: "Armani shirt",
          description: "A nice shirt I bought in Mallorca last year. Size Xl",
          category: "clothes",
          price: "300 kr"
        },
        {
          name: "Rain jacket",
          description: "Rain jacket perfect when it rains.",
          category: "clothes",
          price: "500 kr"
        },
        {
          name: "Playstation 4",
          description: "My sons old playstation. Comes with 4 games",
          category: "Electronics",
          price: "1500 kr"
        }
      ]   
    },
    {
      name: "Petra Hallonqvist",
      id: "0002",
      items: [
        {
          name: "Black boots",
          id: "3",
          description: "My favourite black boots perfect for any type of happenings",
          category: "clothes",
          price: "450 kr"
        },
        {
          name: "Bag",
          id: "4",
          description: "This is a good bag for traveling. There is plenty of room in it.",
          category: "clothes",
          price: "500 kr"
        }
      ]   
    }
  ]);

  const [loggedInUser,setLoggedInUser] = useState("Petra Hallonqvist");
  const selectedUser = users.find(user => user.name === loggedInUser);

  const addItem = (newItem) => {
    const updatedUsers = users.map( user=> {
      if(user.name===loggedInUser){
        return{...user, items:[...user.items,newItem]};
      }
      return user;
    })
    setUsers(updatedUsers);
  }

  const deleteItem = (itemToDelete) => {
    const updatedUsers = users.map( user=> {
      if(user.name===loggedInUser){
        return{...user, items: user.items.filter( item=> item.name !== itemToDelete.name )};
      }
      return user;
    })
    setUsers(updatedUsers);
  }
  

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
