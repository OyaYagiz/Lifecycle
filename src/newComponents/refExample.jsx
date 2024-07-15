import {useRef} from 'react';

const RefExample = () => {
    const inputRef = useRef();
    const buttonRef = useRef();
    
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.background ='red'; 
    };
    return (
    <div className="d-flex gap-5">
        <input ref={inputRef}className="form-control" type="text" />
        <button 
        ref={buttonRef}
        onClick={handleClick}
        className="btn btn-primary">
            Odaklan
        </button>

    </div>
    );
};

export default RefExample;