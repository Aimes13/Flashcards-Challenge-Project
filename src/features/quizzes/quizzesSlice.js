import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const createNewQuiz = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId({ topicId: topicId, quizId: id}));
    };     
};

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state,action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;