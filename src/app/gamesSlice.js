import { createSlice, createAction } from '@reduxjs/toolkit';

export const setGamesError = createAction('setGamesError');
export const newGameError = createAction('newGameError');
export const editGameError = createAction('editGameError');
export const deleteGameError = createAction('deleteGameError');

export const gamesSlice = createSlice({
    name: 'games',
    initialState:{
        games: [],
    },
    reducers: {
        setGames: (state, action) => {
            return { ...state, games: [...action.payload] };
        },
        newGame: (state, action) => {
            return { ...state, games: [action.payload, ...state.games] }
        },
        editGame: (state, action) => {
            const games = state.games.map(game => {
                if (game.id === action.payload.id) {
                    game = action.payload;
                }
                return game;
            });
            return { ...state, games: [...games] };
        },
        deleteGame: (state, action) => {
            const games = state.games.filter(game =>
                game.id !== action.payload.id);
            return { ...state, games: [...games] };
        }
    }
});

export const { setGames, newGame, editGame, deleteGame } = gamesSlice.actions;

export default gamesSlice.reducer;