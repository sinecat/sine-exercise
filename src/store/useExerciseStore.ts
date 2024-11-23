import {create} from 'zustand';

interface ExerciseState {
    isSubmitted: boolean;
    currentAnswersData: string[];
    correctAnswersData: string[];
}

interface SubmitState {
    exerciseState: ExerciseState;
    setSubmitted: (submitted: boolean) => void;
    setCurrentAnswer: (currentAnswer: string, index: number) => void;
    setCorrectAnswer: (correctAnswer: string, index: number) => void;
    resetExerciseState: () => void;
    resetAllExerciseState: () => void;
}

const useSubmitStore = create<SubmitState>((set) => ({
    exerciseState: {
        isSubmitted: false, // 初始为未提交
        currentAnswersData: [],
        correctAnswersData: []
    },
    setSubmitted: (submitted) =>
        set((state) => ({
            exerciseState: {...state.exerciseState, isSubmitted: submitted},
        })),
    setCurrentAnswer: (currentAnswer, index) =>
        set((state) => {
            const newCurrentAnswersData = [...state.exerciseState.currentAnswersData];
            newCurrentAnswersData[index] = currentAnswer;
            return {
                exerciseState: {...state.exerciseState, currentAnswersData: newCurrentAnswersData},
            };
        }),

    setCorrectAnswer: (correctAnswer, index) =>
        set((state) => {
            const newCorrectAnswersData = [...state.exerciseState.correctAnswersData];
            newCorrectAnswersData[index] = correctAnswer;
            return {
                exerciseState: {...state.exerciseState, correctAnswersData: newCorrectAnswersData},
            };
        }),
    resetExerciseState: () => set((state) => ({
        exerciseState: {
            ...state.exerciseState,
            isSubmitted: false,
            currentAnswersData: [],
        }
    })),
    resetAllExerciseState: () => set((state) => ({
        exerciseState: {
            isSubmitted: false,
            currentAnswersData: [],
            correctAnswersData: []
        }
    }))
}));

export default useSubmitStore;
