import { create } from 'zustand';

type AppStoreProps = {
  openMenu: boolean;
  openShop: boolean;
  openSearch: boolean;
  openAuth: boolean;
  showNavbar: boolean;
  darkNavbar: boolean;
  setOpenMenu: (value: boolean) => void;
  setOpenShop: (value: boolean) => void;
  setOpenSearch: (value: boolean) => void;
  setOpenAuth: (value: boolean) => void;
  setShowNavbar: (value: boolean) => void;
  setDarkNavbar: (value: boolean) => void;
};

export const useAppStore = create<AppStoreProps>((set) => ({
  openMenu: false,
  openShop: false,
  openSearch: false,
  openAuth: false,
  showNavbar: false,
  darkNavbar: false,
  setOpenMenu: (value: boolean) => set({ openMenu: value }),
  setOpenShop: (value: boolean) => set({ openShop: value }),
  setOpenSearch: (value: boolean) => set({ openSearch: value }),
  setOpenAuth: (value: boolean) => set({ openAuth: value }),
  setShowNavbar: (value: boolean) => set({ showNavbar: value }),
  setDarkNavbar: (value: boolean) => set({ darkNavbar: value }),
}));
