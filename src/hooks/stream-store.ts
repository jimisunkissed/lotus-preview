import { create } from 'zustand';

type StreamStoreProps = {
  openStream: boolean;
  pictureId: string | number | null;
  streamId: string | number | null;
  setOpenStream: (value: boolean) => void;
  setPictureId: (value: string | number | null) => void;
  setStreamId: (value: string | number | null) => void;
};

export const useStreamStore = create<StreamStoreProps>((set) => ({
  openStream: false,
  pictureId: null,
  streamId: null,
  setOpenStream: (value: boolean) => set({ openStream: value }),
  setPictureId: (value: string | number | null) => set({ pictureId: value }),
  setStreamId: (value: string | number | null) => set({ streamId: value }),
}));
