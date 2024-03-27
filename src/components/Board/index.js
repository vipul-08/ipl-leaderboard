import React, { useEffect, useState } from "react";
import './style.css';
import LeaderboardItem from "../LeaderboardItem";
import {database} from '../firebaseConfig';
import { ref, onValue } from "firebase/database"

export default function Board() {

    const[leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const dbRef = ref(database);
        onValue(dbRef, (s) => {
            setLeaderboardData(s.val());
        });
        
    }, []);

    return(
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>
            <div id="profile">
                {leaderboardData.sort((a,b) => a.score < b.score).map(({boosters, name, score, transfers}, index) => <LeaderboardItem
                    winner={index < 3} 
                    key={index}
                    boosters={boosters} 
                    name={name} 
                    score={score} 
                    transfers={transfers}/>)
                }
            </div>
        </div>
    );
}