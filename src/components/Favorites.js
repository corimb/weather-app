import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { removeFavStorage, readFavStorage} from '../services/storage';
import {getDataFromApiId} from '../services/api';
import Icons from './Icons';
import deleteIcon from '../images/delete.svg';

const Favorites = () => {
    const [favoritesData, setFavoritesData] = useState([]);

    // si hay algo en localStorage llamamos a la función getDataFavorites pasándole el array de ids 
    useEffect(() => {
        const favoritesLocal = readFavStorage();
        if(favoritesLocal){
            getDataFavorites(favoritesLocal);
        }
    }, [favoritesData]);

    const removeFav = (id) => {
        removeFavStorage(id);
    }

    // recorrer todo el array de Ids 
    // buscar en la api del tiempo por Id
    const getDataFavorites = async (favoritesIds) => {
        const favListData = [];
        for(const id of favoritesIds){
            const cityData = await getDataFromApiId(id);
            if(cityData){
                favListData.push(cityData);
            }
        }
        setFavoritesData(favListData);
    }
    

    return (
        <section className="fav-page">
            <Link to="/">
                <button className="btn">
                    back
                </button>
            </Link>
            { favoritesData.length > 0 ? (
                <ul className="fav-list">
                {
                    favoritesData.map((item, index) => {
                        return <li className="fav-element">
                        <Icons className="fav-icons"
                        key={index}
                        iconId={item.weather.map(fav => {return fav.id})} 
                        sunrise={item.sys.sunrise} 
                        sunset={item.sys.sunset}/>
                        <h2>{Math.floor(item.main.temp)}ºC</h2>
                        <h4>{item.name}</h4>
                        <img src={deleteIcon} alt="delete icon" onClick={() => removeFav(item.id)}></img>
                        </li>
                    })
                }
                </ul>
                ) : 
                <p className="fav-none">No hay faovritos que mostrar</p>
            }
        </section>
    )
}

export default Favorites
