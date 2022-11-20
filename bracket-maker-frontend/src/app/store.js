import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import playingBracketReducer from '../features/playingBracket/playingBracketSlice'
import managingBracketReducer from '../features/managingBracket/managingBracketSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    playingBracket: playingBracketReducer,
    managingBracket: managingBracketReducer
  },
})
