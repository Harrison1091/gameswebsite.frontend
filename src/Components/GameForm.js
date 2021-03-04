import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { EditGame, NewGame, DeleteGame } from '../services/Games';
import { useDispatch } from 'react-redux';

export default ({ game, setIsEditing }) => {
    const ratings = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const pegiRatings = ['3', '7', '12', '16', '18'];
    const [date, setDate] = useState(0);
    const [description, setDescription] = useState(0);
    const [name, setName] = useState(0);
    const [rating, setRating] = useState(ratings[0]);
    const [pegiRating, setPegiRating] = useState(pegiRatings[0]);
    const [isNewGame, setIsNewGame] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (game !== undefined) {
            setIsNewGame(false);
            setDate(game.date);
        }
        else {
            setIsNewGame(true);
        }
    }, [game]);

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if (isNewGame) {
                NewGame(dispatch, { rating: Number(rating), pegiRating: Number(pegiRating), date: date, description: description, name: name });
            }
            else {
                EditGame(dispatch, { id: game.id, rating: Number(rating), pegiRating: Number(pegiRating), date: date, description: description, name: name });
                setIsEditing(false);
            }
        }}
    >
        <Row>
            <Col>
                <Form.Label>Rating</Form.Label>
                <Form.Control as='select'
                    onChange={event => setRating(event.target.value)}>
                    {ratings.map(d => <option>{d}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text'
                    onChange={event => setName(event.target.value)}>
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text'
                    onChange={event => setDescription(event.target.value)}>
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>PEGI Rating</Form.Label>
                <Form.Control as='select'
                    onChange={event => setPegiRating(event.target.value)}>
                    {pegiRatings.map(d => <option>{d}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Year of Release</Form.Label>
                <Form.Control type='text'
                    placeholder={date}
                    onChange={event => setDate(event.target.value)} />
            </Col>
            <div style={{ marginTop: 'auto' }}>
                {isNewGame
                    ? <Button variant='primary' type='submit'>Add</Button>
                    : <div>
                        <Button style={{ marginRight: '2px' }} variant='danger'
                            onClick={() => DeleteGame(dispatch, game)}>Delete</Button>
                        <Button style={{ marginRight: '2px' }} variant='success' type='submit'>Save</Button>
                        <Button style={{ marginRight: '2px' }} variant='default' onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>}
            </div>
        </Row>
    </Form>
}