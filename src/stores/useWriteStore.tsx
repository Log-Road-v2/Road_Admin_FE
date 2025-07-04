import { create } from 'zustand'

type AuthorCategory = 'PERSONAL' | 'TEAM';

interface Award {
  name: string,
  awardCount: number
}

interface InfoData {
  video: string;
  contestId: number;
  projectName: string;
  authorCategory: AuthorCategory | null;
  teamName: string;
  awards: Award[];
  introduction: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
  image: string;
}

interface WriteStoreType {
  info: InfoData;
  setInfo: (data: Partial<InfoData>) => void;
  reset: () => void;
}

const initialInfo: InfoData = {
  contestId: 0,
  projectName: '',
  authorCategory: null,
  teamName: '',
  awards: [],
  introduction: '',
  description: '',
  startDate: null,
  endDate: null,
  image: '',
  video: ''
};

export const useWriteStore = create<WriteStoreType>((set) => ({
  info: initialInfo,

  setInfo: (data) =>
    set((state) => ({
      info: {
        ...state.info,
        ...data,
      },
    })),

  reset: () => set({ info: initialInfo }),
}));
