import {create} from 'zustand';

interface AnswerCardHeightStore {
    height: number;
    setHeight: (height: number) => void;
}

const useAnswerCardHeightStore = create<AnswerCardHeightStore>((set) => ({
    height: 0,
    setHeight: (height: number) => {
        set(() => ({
            height: height
        }));
    }
}))

export default useAnswerCardHeightStore;
