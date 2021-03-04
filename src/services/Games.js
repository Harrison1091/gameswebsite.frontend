import { setGames, newGame, editGame, deleteGame,
    setGamesError, editGameError, newGameError, deleteGameError } 
    from '../app/gamesSlice';
    import * as axios from 'axios';
    
    const axiosInstance = axios.create({
        baseURL: 'https://localhost:5001/Games',
    })
    
    export const GetGames = async (dispatch) => {
        try {
            // api call
            const { data } = await axiosInstance.get();
            dispatch(setGames(data));
        } catch {
            dispatch(setGamesError());
        }
    }
    
    export const NewGame = async (dispatch, game) => {
        try {
            // api call 
            const { data } = await axiosInstance.post('', game);
            dispatch(newGame(data));
        } catch {
            dispatch(newGameError());
        }
    }
    
    export const EditGame = async (dispatch, game) => {
        try {
            // api call
            await axiosInstance.put('', game);
            dispatch(editGame(game));
        } catch {
            dispatch(editGameError());
        }
    }
    
    export const DeleteGame = async (dispatch, game) => {
        try {
            // api call
            console.log('deleteing game: ', game);
            await axiosInstance.delete('', { data: { ...game } });
            dispatch(deleteGame(game));
        } catch {
            dispatch(deleteGameError());
        }
    }