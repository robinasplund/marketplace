
import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export const useUserStore = create((set) => ({

  user: null,
  setUser: (user) => set ({ user: user }),

  fetchUser: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Fel vid hämtning av användare', error.message);
    } else {
      set({ user: data.user });
    }
  },

  fetchItems: async () => {

    const { user } = useUserStore.getState();
    if (!user) return [];

    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('user_id', user.id);
 
    if (error) {
      console.error('Failed to fetch items', error.message);
      return[];
    }

    return data;
  },

  addItem: async (newItem) => {

    const { user } = useUserStore.getState();
    if (!user) return;

    const { error } = await supabase.from('items').insert([
      {
        ...newItem,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error('Add item failed', error.message);
    }
  },

  deleteItem: async (itemId) => {
    const { error } = await supabase.from('items').delete().eq('id', itemId);

    if (error) {
      console.error('Delete item failed', error.message);
    }
  },

}));
