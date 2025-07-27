import { create } from 'zustand';

type AuthStoreProps = {
  loaded: boolean;
  signed_in: boolean | null;
  access_token: string | null;
  user_id: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  setLoaded: (value: boolean) => void;
  setSignedIn: (value: boolean) => void;
  setAccessToken: (value: string | null) => void;
  setUserId: (value: string | null) => void;
  setEmail: (value: string | null) => void;
  setFirstName: (value: string | null) => void;
  setLastName: (value: string | null) => void;
};

export const useAuthStore = create<AuthStoreProps>((set) => ({
  loaded: false,
  signed_in: null,
  access_token: null,
  user_id: null,
  email: null,
  first_name: null,
  last_name: null,
  setLoaded: (value: boolean) => set({ loaded: value }),
  setSignedIn: (value: boolean | null) => set({ signed_in: value }),
  setAccessToken: (value: string | null) => set({ access_token: value }),
  setUserId: (value: string | null) => set({ user_id: value }),
  setEmail: (value: string | null) => set({ email: value }),
  setFirstName: (value: string | null) => set({ first_name: value }),
  setLastName: (value: string | null) => set({ last_name: value }),
}));
