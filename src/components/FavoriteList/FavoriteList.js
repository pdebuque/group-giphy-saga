
import React from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import '../FavoriteList/FavoriteList.css';



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
            <h3>M'favorite giphys!</h3>
            {/* <h4>{JSON.stringify(favorites)}</h4> */}
            <>
            <ul className='flex-container'>
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