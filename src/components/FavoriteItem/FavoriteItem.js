import React, {useState} from "react";
import '../FavoriteItem/FavoriteItem.css';
import {useDispatch} from 'react-redux';


function FavoriteItem ({favorite}){

    const dispatch=useDispatch();

    const [category,setCategory] = useState(0)

    const removeFavorite = () => {
        console.log('in removeFavorite', favorite.id)
        dispatch({
            type: 'DELETE_FAVORITE', payload: favorite.id
        });
    }
    
    const addCategory = () =>{
        console.log('in addCategory');
        dispatch({
            type: 'ADD_CATEGORY',
            payload: {
                id: favorite.id,
                category_id: category
            }
        })
    }

    return (
        <div className='gif-container' key={favorite.id}>
            {/* <p>{favorite.name}</p> */}
            <p><img src={favorite.url} /></p>
            <p>
                <button className='delete-btn'onClick={removeFavorite}>Remove from Favorites</button>
                <select
                    name = 'category'
                    id="category-input"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                >
                    <option value=''>-- select a category --</option>
                    <option value="1">Funny</option>
                    <option value="2">Cohort</option>
                    <option value="3">Cartoon</option>
                    <option value="4">NSFW</option>
                    <option value="5">Meme</option>
                </select>
                <button onClick={addCategory}>add category</button>



                {/* <div class="dropdown">
                    <button class="dropbtn">Add Category</button>
                        <div class="dropdown-content">
                            <a href="#">Funny</a>
                            <a href="#">Cohort</a>
                            <a href="#">Meme</a>
                            <a href="#">NSFW</a>
                            <a href="#">Cartoon</a>
                        </div>
                </div> */}
            </p>
        </div>
    )
}



export default FavoriteItem;