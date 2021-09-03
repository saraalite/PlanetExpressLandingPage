import React from 'react';
import moment from 'moment';

function CountDownTimer({expirationDate}) {
    
    function durationFromToday(expirationDate) {
        const today = moment();
        const duration = moment.duration(expirationDate.diff(today));
        return duration;
    }

    function durationAsString(duration) {
        if (duration.asDays() > 0) {
            const days = Math.floor(duration.asDays());
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();

            return `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            return 'La oferta ha terminado'
        }
      }

    const [duration, setDuration] = React.useState(durationFromToday(expirationDate));
    
    React.useEffect(() => {
        const tick = () => setDuration(durationFromToday(expirationDate));
        const tickInterval = setInterval(() => tick(), 1000);
        return () => clearInterval(tickInterval);        ;
    }, [expirationDate]);

    
    return (
        <div> { durationAsString(duration) } </div>
    );
}

export default CountDownTimer;