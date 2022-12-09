import React from "react";
import '../FavoriteItem/FavoriteItem.css';




function FavoriteItem (props){

    const favorite = props.favorite;


    const removeFavorite = () => {
        console.log('in removeFavorite', favorite.id)
        dispatch({
            type: 'DELETE_FAVORITE', payload: favorite.id
        });
    }


    return (
        <div className='gif-container' key={favorite.id}>
            {/* <p>{favorite.name}</p> */}
            <p><img src={favorite.url} /></p>
            <p>
                <button className='delete-btn'onClick={removeFavorite}>Remove from Favorites</button>
                <div class="dropdown">
                    <button class="dropbtn">Add Category</button>
                        <div class="dropdown-content">
                            <a href="#">Funny</a>
                            <a href="#">Cohort</a>
                            <a href="#">Meme</a>
                            <a href="#">NSFW</a>
                            <a href="#">Cartoon</a>
                        </div>
                </div>
            </p>
        </div>
    )
}



export default FavoriteItem;