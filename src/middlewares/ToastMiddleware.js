import { newGame, editGame, deleteGame, 
    setGamesError, newGameError, editGameError, deleteGameError } from '../app/gamesSlice';
import { toast } from 'react-toastify';

const ToastMiddleware = () => next => action => {
    switch(action.type) {
        case newGame.type:
            toast.success('New game added successfully');
            break;
        case editGame.type:
            toast.success('Game edited successfully');
            break;
        case deleteGame.type:
            toast.success('Game deleted successfully');
            break;
        case setGamesError.type:
            toast.error('Error loading games');
            break;
        case newGameError.type:
            toast.error('Error adding new game');
            break;
        case editGameError.type:
            toast.error('Error editing game');
            break;
        case deleteGameError.type:
            toast.error('Error deleting game');
            break;
        default:
            break;
    }
    return next(action);
}

export default ToastMiddleware;