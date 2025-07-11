
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

  clearUser: () => set({ user: null }),

}));
