import React from 'react';
import './Header.css';


export default ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href=''>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt='netflix' />
                </a>
            </div>

            <div className='header--user'>
                <a href=''>
                    <img src='https://occ-0-1308-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229' />
                </a>
            </div>
        </header>
    )

}