import React, { useState } from 'react';

export default function Form(props) {
    const [ name, setName ] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        if(!name.trim()) {
            return;
        }
        props.addTask(name);
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='label-wrapper'>
                <label htmlFor='new-todo-input' className='label__lg'>
                    TODO TASK
                </label>
            </h1>
            <input 
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete='off'
                placeholder='Add task....'
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className='btn btn-primary btn__lg'>
                Add
            </button>
        </form>
    );
}

