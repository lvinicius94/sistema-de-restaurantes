import React, { useState } from 'react';

function Nome() {
    const [nome, setNome] = useState('Cliente');
    const [editando, setEditando] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleDivClick = () => {
        setEditando(true);
        setInputValue(nome);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
        setNome(inputValue);
        setEditando(false);
    };

    return (
        <div>
            {editando ? (
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    autoFocus
                />
            ) : (
                <div onClick={handleDivClick}>{nome}</div>
            )}
        </div>
    );
}

export default Nome;
