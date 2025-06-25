import { useState } from 'react'
import './App.css'
import User from './components/User.jsx'

function App() {

  const users = [
    {
      userName: "Göran Andersson",
      userId: "0001",
      userItems: [
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
      userName: "Petra Hallonqvist",
      userId: "0002",
      userItems: [
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
  ];

  const [loggedInUser,setLoggedInUser] = useState("Göran Andersson");
  const selectedUser = users.find(user => user.userName === loggedInUser);

  console.log(loggedInUser);
  

  return (

    <div className="grid grid-cols-1 items-center gap-6 p-8 border">

      {selectedUser ? (
        <User name={selectedUser.userName} id={selectedUser.userId} items={selectedUser.userItems} />
      ):(
        <p>ingen användare hittades</p>
      )}

    </div> 

  );
}
export default App
