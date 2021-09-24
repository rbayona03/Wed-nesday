import React, {useState, useEffect} from 'react';
import '../Styles/styles.css';


const CountDown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [eventDate, setEvent] = useState('December 17, 2022');

    useEffect(()=> {
        timeLogic(eventDate);
        setInterval(() => timeLogic(eventDate), 1000)
    }, [])

    const timeLogic = (event) => {
        const time = Date.parse(event) - Date.parse(new Date());
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

   const leadingZero = (num) => {
        return (num < 10 && num > 0) ? "0" + num : num;
    };

    return(
        <div className="countDown">
            <div className="clock">
                {leadingZero(days)} {days <= 1 ? 'Day' : 'Days'} :
            </div>
            <div className="clock">
                {leadingZero(hours)} {hours <= 1 ? 'Hour' : 'Hours'} :
            </div>
            <div className="clock">
                {leadingZero(minutes)} {minutes <= 1 ? 'Minute' : 'Minutes'} :
            </div>
            <div className="clock">
                {leadingZero(seconds)} {seconds <= 1 ? 'Second' : 'Seconds'}
            </div>
        </div>
    );
};

export default CountDown;