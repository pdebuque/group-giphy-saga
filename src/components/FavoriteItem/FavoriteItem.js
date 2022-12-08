import React from "react";




function FavoriteItem (props){

    const favorite = props.favorite;


    const removeFavorite = () => {
        console.log('in removeFavorite', favorite.id)
        dispatch({
            type: 'DELETE_FAVORITE', payload: favorite.id
        });
    }


    return (
        <div>
            <p>{favorite}</p>
            <button key={favorite.id} onClick={removeFavorite}>Remove</button>
        </div>
    )
}



export default FavoriteItem;