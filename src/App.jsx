import { useState } from 'react'
import './App.css'
import Item from './components/Item.jsx'


function App() {


  const items = [
    {
      name: "Regnjacka",
      description: "Min gamla regn jacka säljer jag nu för en billig slant :). Den har följt med i ur och skur och är mycket pålitlig",
      category: "kläder",
      price: 200,
      user: "Bengt Andersson",
      number: "009"
    },
    {
      name: "Skjorta Armani",
      description: "Mycket snygg skjorta som är i princip helt oanvänd. Perfekt när du vill vara stilig. Enkel att tvätta.",
      category: "kläder",
      price: 800,
      user: "Johan Rebenskjöld",
      number: "010"
    },
    {
      name: "Byxor Manchester",
      description: "Dessa snygga bruna manchesterbyxor är ett kap.",
      category: "kläder",
      price: 150,
      user: "Torbjörn Åkesson",
      number: "011"
    },
    {
      name: "Blus",
      description: "Sommarblus i siden. Inköpt på HM för cirka 6 månader sen. Stilig och avslappnad på samma gång",
      category: "kläder",
      price: 300,
      user: "Johanna Lyckebo",
      number: "012"
    }
  ];
  

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 p-8">
 
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
      
    </div>

  );
}
export default App
