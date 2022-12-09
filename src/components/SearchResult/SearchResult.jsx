import { useDispatch } from 'react-redux';

export default function SearchResult({ result }) {
	const dispatch = useDispatch();
	const imageURL = result.images.downsized_large.url;
	console.log(imageURL);

	const handleFavorite = () => {
		dispatch({
			type: 'ADD_TO_FAVORITES',
			payload: imageURL,
		});
	};

	return (
		<div key={result.id} className='gif-container'>
			<img src={imageURL} />
			<div>
				<button className='favorite-btn' onClick={handleFavorite}>
					Favorite
				</button>
			</div>
		</div>
	);
}
