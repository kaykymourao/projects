import React, { useState } from 'react'
import './MovieRow.css'
/*import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';*/

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = (items.results.length - 1) * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 50;
        }
        setScrollX(x)
    }

    return(
        <div className='movieRow'>
            <h2>{title}</h2>
                <div className="movieRow--left" onClick={handleLeftArrow}>
                    <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: 30}} />
                </div>

                <div className="movieRow--right" onClick={handleRightArrow}>
                    <FontAwesomeIcon icon={faAngleRight} style={{fontSize: 30}} />
                </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )

}