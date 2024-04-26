import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.submit} className='text-center'>
            <input 
            className='p-3 border-2 border-black rounded-full text-center md:mx-5 '
            type='text' 
            value={props.value}
            onChange={props.change}
            placeholder='Wpisz miasto'
            />
            <button className='mt-5 border-2 border-black rounded-full p-3 bg-green-600 hover:bg-green-700'>Wyszukaj miasto</button>
        </form>
    );
};

export default Form;