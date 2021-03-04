import GameList from './Components/GameList';
import GameForm from './Components/GameForm';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <div style={{ width: '60%', margin: 'auto' }}>
    <ToastContainer />
    <h3>New Game</h3>
    <GameForm />
    <hr style={{ border: '1px solid grey'}} />
    <h3>Your Games</h3>
    <GameList />
  </div>
);

export default App;
