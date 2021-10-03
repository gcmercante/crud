import { useState, useEffect } from 'react';

import { useAlert } from '../hooks/useAlert';

import '../styles/alert.scss';

export function Alert(props) {
    const [ barValue, setBarValue ] = useState(99);
    const { showAlert, setShowAlert } = useAlert();

    useEffect(() => {
        if(showAlert) {
            const interval = setInterval(() => {
                setBarValue(barValue - 0.25);
            }, 1000 / (props.timeOut * 4));
            
            if(barValue <= 0) {
                setShowAlert(false);
                setBarValue(99);
            }

            function closeOnMouseDown(ev) {
                setShowAlert(false);
                setTimeout(() => {
                    setBarValue(99);
                }, 300);
            }
    
            document.addEventListener("mousedown", closeOnMouseDown);
            return () => {
                clearInterval(interval);
                document.removeEventListener("mousedown", closeOnMouseDown);
            }
        }
    }, [barValue, setBarValue, props, setShowAlert, showAlert]);

    return (
        <div className={`alert ${showAlert ? 'show-alert': ''}`}>
            <div className={`alert-content ${props.warning ? 'warning' : ''}`}>
                <div className="alert-text">
                    <span>
                        {props.content}
                    </span>
                </div>
                <progress value={barValue} max="100" />
            </div>
        </div>
    )
}