import { useEffect } from 'react';

import '../styles/modal.scss';

export function Modal(props) {

    useEffect(() => {
        function closeOnEscKeyDown(ev) {
            if((ev.charCode || ev.keyCode) === 27) {
                props.onClose();
            }
        }

        document.addEventListener("keydown", closeOnEscKeyDown);
        return () => {
            document.removeEventListener("keydown", closeOnEscKeyDown);
        };
    }, [props])
    
    return (
        <div className={`overlay ${props.show ? 'show': ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={ev => ev.stopPropagation()}>
                <header>
                    <span>{props.title}</span>
                </header>
                <div className="modal-body">
                    <span>{props.content}</span>
                </div>
                <footer>
                    {
                        props.buttons.map((btn, i) => (
                            <button 
                                className={btn.color}
                                onClick={btn.action === 'close' ? props.onClose : btn.action} 
                                key={i}
                            >
                                {btn.name}
                            </button>
                        ))
                    }
                </footer>
            </div>
        </div>
    )
}