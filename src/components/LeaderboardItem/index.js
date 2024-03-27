import React from "react";
import winnerTag from '../../premium-quality.png';
import normalTag from '../../male-avatar-boy.svg';
import './style.css';

export default function LeaderboardItem({name, score, boosters, transfers, winner}) {
    return (
        <div className="flex">
            <div className="item">
                <img src={winner ? winnerTag : normalTag} alt="" />

                <div className="info">
                    <h3 className='name text-dark'>{name}</h3> 
                    <span>Transfers Used: {transfers}</span> 
                    <span>Boosters Used: {boosters}</span>
                </div>                
            </div>
            <div className="item">
                <span>{score}</span>
            </div>
        </div>
    );
}