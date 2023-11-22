import React, { useState, useContext } from 'react';
import { Event } from './Event/Event';
import { GlobalContext } from '../context/GlobalState';
import "./EventBoard.css";

export const EventBoard = () => {
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        };

        addEvent(newEvent);

        setEvent('');
        setTime('');
    }

    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    Events List
                    <p className="subtitle">An reminder checklist.</p>
                </div>
            </div>
            <div className="Body">
                <ul className="Events">
                    {events.map(item => (<Event key={item.id} item={item} />))}
                </ul>
                <div className="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input className="eventFiled" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="Event name..." />
                        <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                        <button className="submitBtn">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
