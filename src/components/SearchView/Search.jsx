import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../SearchView/Search.css';

export default function SearchView() {
	const dispatch = useDispatch();
	const [searchTerm, setSearch] = useState('');

	const searchResults = useSelector(store => store.searchResults);

	const handleChange = e => {
		e.preventDefault();
		// console.log('In search input field');
		setSearch(e.target.value);
		// console.log('searchResult: ', searchResults);
	};

	const handleSubmit = () => {
		console.log('Clicked on Search button in Search.jsx');
		dispatch({
			type: 'MAKE_SEARCH',
			payload: searchTerm,
		});
	};

	return (
		<div>
			<input
				type='text'
				name='name'
				value={searchTerm}
				placeholder='Search'
				required
				onChange={handleChange}></input>
			<button onClick={handleSubmit}>Search</button>

			<div>
				<h3> Results</h3>
				<div className='flex-container'>
					{searchResults.map(image => {
						return (
							<div key={image.id} className='gif-container'>
								<img src={image.images.downsized_large.url} />
								<div>
									<button className='favorite-btn'>Favorite</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
