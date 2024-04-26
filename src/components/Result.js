import React from 'react';

const Result = (props) => {

    const { date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather;


    let content = null;

    if (!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <div>
                <h3 className='p-2 text-xl border-2 bordel-solid border-black rounded-full'>Wyniki wyszukiwania dla <em>{city}</em>:</h3>
                <h4 className='mt-3 text-xl border-2 bordel-solid border-black rounded-full'>Dane dla dnia i godziny: {date}</h4>
                <div  className="p-4 mt-3 text-xl border-2 bordel-solid border-black rounded-3xl">
                    <h4 className='mt-2 font-medium '>Aktualna temperatura: {temp} &#176;C</h4>
                    <h4 className='mt-2 font-medium '>Wschód słońca dzisiaj o {sunriseTime}</h4>
                    <h4 className='mt-2 font-medium '>Zachód słońca dzisiaj o {sunsetTime}</h4>
                    <h4 className='mt-2 font-medium '>Aktualna siła wiatru: {wind} m/s</h4>
                    <h4 className='mt-2 font-medium '>Aktualne ciśnienie: {pressure} hPa</h4>
                </div>
                
            </div>
        )
    }

    return(
        <div className='result text-center p-5 font-medium text-lg'>
            {err ? `Nie mamy w bazie tego miasta :( ${city}` : content}
        </div>
    );
};

export default Result;