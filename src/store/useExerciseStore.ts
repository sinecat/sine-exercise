import { create } from 'zustand';

interface ExerciseState {
    isSubmitted: boolean;
    [key: string]: any; // 用于扩展其他状态字段
}

interface SubmitState {
    exerciseState: ExerciseState;
    setSubmitted: (submitted: boolean) => void;
}

const useSubmitStore = create<SubmitState>((set) => ({
    exerciseState: {
        isSubmitted: false, // 初始为未提交
    },
    setSubmitted: (submitted) =>
        set((state) => ({
            exerciseState: { ...state.exerciseState, isSubmitted: submitted },
        })),
}));

export default useSubmitStore;
