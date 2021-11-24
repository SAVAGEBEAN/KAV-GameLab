import React from "react";
import cardimage from '../../../game page/Card-images/fortnite.jpg';
import './Gamedetails.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Fortnite = () => {

    const [games, setgames] = useState(null);
    const [gamename, setgamename] = useState(null);
    const [Description, setDescription] = useState(null);
    const [price, setprice] = useState(null);
    const [gamelink, setgamelink] = useState(null);
    const [Totallikes, setTotallikes] = useState(null);
    const [mincpu, setmincpu] = useState(null);
    const [mingpu, setmingpu] = useState(null);
    const [minram, setminram] = useState(null);
    const [reccpu, setreccpu] = useState(null);
    const [recgpu, setrecgpu] = useState(null);
    const [recram, setrecram] = useState(null);

    useEffect(() => {
        const loadname = async () => {
            const response = await axios.get('http://localhost:9000/game');
            setgames(response.data);
            console.log(response.data);
        }
        loadname();
    }, []);

   

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    // Assigning json object value to varibales
    useEffect(() => {
        
            games && games.filter((game) => game.Game_name === 'FORTNITE').map((game) => (
                <div className="game-details" key={game.id}>
                    {setgamename(game.Game_name)}
                    {setDescription(game.Description)}
                    {setprice(game.price)}
                    {setgamelink(game.Game_link)}
                    {setTotallikes(game.Total_likes)}
                    {setmincpu(game.Specs_requirements.min_cpu)}
                    {setmingpu(game.Specs_requirements.min_gpu)}
                    {setminram(game.Specs_requirements.min_ram)}
                    {setreccpu(game.Specs_requirements.rec_cpu)}
                    {setrecgpu(game.Specs_requirements.rec_gpu)}
                    {setrecram(game.Specs_requirements.rec_ram)}
                </div>
            ))
        
    })

    return (
        <div className="mai-cont">
            <div className="gameimage">
            <a href={gamelink} className="download" target="_blank" rel="noreferrer">Download now</a>
                <img src={cardimage} className="image" alt="Fortnite" />
                <h3 className="likes">
                <i className="fas fa-heart" id="heart"></i>
                    {Totallikes}
                <i className="fas fa-heart-broken" id="disheart"></i>43</h3>
            </div>

            {/* Game introduction */}
            <div className="intro">
                <h1 className="name">{gamename}</h1>
                <p className="description">{Description}</p>
               
                 <h5 className="gameprice">{price}</h5>
               
                <hr />
                <div className="requirement">
                    <ul className="minreq">
                        <h2>Minimum Requirements</h2>
                        <li>Proccesor : {mincpu}</li>
                        <li>GPU : {mingpu}</li>
                        <li>RAM : {minram}</li>
                    </ul>
                    <ul className="recreq">
                        <h2>Recommended Requirements</h2>
                        <li>Proccesor :  {reccpu}</li>
                        <li>GPU : {recgpu}</li>
                        <li>RAM : {recram}</li>
                    </ul>

                </div>

                {/* Link for checking game requirements */}
                <div className="checkclick">
                    <NavLink className="check" to="/labpage">Can i run it?</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Fortnite