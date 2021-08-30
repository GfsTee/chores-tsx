import React from 'react';
import './timer.css'
interface IProps {
    ele: {
        name: string;
        goesUp: boolean;
        time: number;
    }
}

const COLOR_CODES: {
    info: {
        color: string;
    };
    warning: {
        color: string;
    };
    alert: {
        color: string;
    };
} = {
    info: {
        color: "greenyellow"
    },
    warning: {
        color: "orange"
    },
    alert: {
        color: "red"
    }
};

const Timer: React.FunctionComponent<IProps> = ({ ele }) => {
    const { name, goesUp, time } = ele

    const day: number = 400  // day in seconds
    // const day: number = 86400  // day in seconds
    const initialTimeLeft: () => number = () => Number(window.localStorage.getItem(name)) || goesUp ? 0 : (time * day)
    const [timeLeft, setTimeLeft] = React.useState(initialTimeLeft); // starttime from local storage or initialtime


    // Color:
    const [color, setColor] = React.useState({ color: "greenyellow" })

    // 
    React.useEffect(() => {
        window.localStorage.setItem(name, timeLeft.toString())
        const id: NodeJS.Timeout = setTimeout(() => {
            if (goesUp) {
                setTimeLeft(prev => prev + 1) // Count up
                if (timeLeft < (day * time)) {
                    setColor(COLOR_CODES.info)
                } else {
                    setColor(COLOR_CODES.alert)
                };
            } else {
                setTimeLeft(prev => prev - 1) // Count down
                if (timeLeft > day * 2) {
                    setColor(COLOR_CODES.info)
                } else if (timeLeft > day * 1) {
                    setColor(COLOR_CODES.warning)
                } else {
                    setColor(COLOR_CODES.alert)
                };
            }
        }, 100);
        return () => clearInterval(id)
    }, [timeLeft, name, goesUp, time]);

    return (
        <div className="timer">
            <h2>{name}</h2>
            <div className="base-timer" onClick={() => setTimeLeft(goesUp ? 0 : (time * day))}>
                <div className={`overlay ${(timeLeft <= 0) ? "show" : ""}`}>
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                            <path
                                id="base-timer-path-remaining"
                                strokeDasharray={`${Math.floor(timeLeft / ((time * day) / 283))} 283`}
                                className={`base-timer__path-remaining`}
                                style={color}
                                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                            ></path>
                        </g>
                    </svg>
                    <div className="base-timer__label">
                        <span className="big">
                            {timeLeft > 0 ? Math.floor(timeLeft / day) : Math.ceil(timeLeft / day)}
                        </span>
                        <span className="hours">
                            {Math.floor((timeLeft % day) / 3600)}
                        </span>
                        <span className="small">
                            {timeLeft.toString().slice(-2)}
                        </span>
                    </div>

                </div>
            </div >
        </div>
    )

};

export default Timer