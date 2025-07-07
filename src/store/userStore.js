
import {create} from 'zustand';

export const useUserStore = create( (set) => ({

    users:[
      {
        name: "Göran Andersson",
        id: "0001",
        items: [
          { name: "Armani shirt", description: "A nice shirt...", category: "clothes", price: "300 kr" },
          { name: "Rain jacket", description: "Rain jacket...", category: "clothes", price: "500 kr" },
          { name: "Playstation 4", description: "My sons old...", category: "Electronics", price: "1500 kr" }
        ]
      },
      {
        name: "Bosse Eliasson",
        id: "0002",
        items: [
          { name: "Tv 66 inch", description: "Completely new TV...", category: "Electronics", price: "3000 kr" },
          { name: "Bike", description: "My old bike...", category: "Vehicles", price: "500 kr" },
          { name: "Jeans denim XL", description: "My sons old...", category: "Clothes", price: "500 kr" }
        ]
      }
    ],

    loggedInUser: "Göran Andersson",
    setLoggedInUser: (name) => set({ loggedInUser: name }),

    addItem: (newItem) => set((state) => ({
      users: state.users.map(user => 
        user.name === state.loggedInUser
          ? {...user, items: [...user.items, newItem] }
          : user
      )
    })),
    deleteItem: (itemToDelete) => set((state) => ({
      users: state.users.map(user =>
        user.name === state.loggedInUser
          ? {
              ...user,
              items: user.items.filter(item => item.name !== itemToDelete.name)
            }
          : user
      )
    }))

}));
