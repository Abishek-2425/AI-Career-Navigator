import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import careerReducer from './slices/careerSlice';
import chatReducer from './slices/chatSlice';
import resumeReducer from './slices/resumeSlice';
import analyticsReducer from './slices/analyticsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        career: careerReducer,
        chat: chatReducer,
        resume: resumeReducer,
        analytics: analyticsReducer
    }
});
