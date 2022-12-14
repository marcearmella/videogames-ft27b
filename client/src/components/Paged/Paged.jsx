import React from "react";
import styles from './Paged.module.css';

export default function Paged({gamesPerPage, allVideogames, paged}){

    const pageNumber = [];

    for (let i=1; i<=Math.ceil(allVideogames/gamesPerPage);i++){
        pageNumber.push(i);
    }

    if(!allVideogames){
        return(
            <div>
                <img src="https://thumbs.gfycat.com/HardPiercingEastrussiancoursinghounds-max-1mb.gif" alt="loading" />
            </div>
        ) 
    }else{
        return(
            <nav className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Pages</li>
                    {
                        pageNumber?.map( num => (
                            <li className={styles.li} key={num}>
                                <button onClick={() => paged(num)}>{num}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );

    }
}