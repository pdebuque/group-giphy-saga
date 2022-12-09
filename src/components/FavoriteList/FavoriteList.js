
import React from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";  //!combine all imports at the end
import { useEffect } from "react";

function FavoriteList () {


    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favoritesList);


    useEffect(() => {
        getFavorites();
    }, []);


    const getFavorites = () => {
        dispatch({type: 'FETCH_FAVORITES'});
    }






    return (
        <div>
            <h3>This is the favorite list for giphys!</h3>
            <h4>{JSON.stringify(favorites)}</h4>
            <>
            <ul className="favoriteUL">
                {favorites.map(favorite => (
                <li>
                    <FavoriteItem key={favorite.id} favorite={favorite}/>
                </li>
                ))}
            </ul>   
            </>      
        </div>





    )
}

export default FavoriteList;