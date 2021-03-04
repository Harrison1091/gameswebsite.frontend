import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetGames } from '../services/Games';
import { Button, Row, Col } from 'react-bootstrap';
import GameForm from './GameForm';
import './css/GameList.css';

export default () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.gamesSlice.games);

    useEffect(() => {
        GetGames(dispatch);
    }, []);

    return games.map(e =>
        <div style={{ marginBottom: '1rem' }}>
            <ListRow key={e.id}game={e} />
        </div>
    );
}

const ListRow = ({ game }) => {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing
        ? <GameForm game={game} setIsEditing={setIsEditing} />
        : <div>
            <Row>
                <Col>Ratings</Col>
                <Col>Title</Col>
                <Col>Description</Col>
                <Col>PEGI Rating</Col>
                <Col className="top">Year of Release</Col>
            </Row>
            <Row>
                <Col>{game.rating}</Col>
                <Col>{game.name}</Col>
                <Col>{game.description}</Col>
                <Col>{game.pegiRating}</Col>
                <Col>{game.date}</Col>
                <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button>
            </Row>
            <hr />
        </div>
}