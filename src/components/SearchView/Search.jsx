import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchView() {
	const dispatch = useDispatch();
	const [viewSearch, setSearch] = useState('');

	const gifResult = useSelector(store => store.searchResult);

	const handleChange = e => {
		e.preventDefault();
		console.log('In search input field');
		setSearch(e.target.value);
	};

	const fetchNewGif = () => {
		console.log('Clicked on Search button in Search.jsx');
		dispatch({
			type: 'MAKE_SEARCH',
			payload: viewSearch,
		});
	};

	return (
		<div>
			<input
				type='text'
				name='name'
				value={viewSearch}
				placeholder='Search'
				required
				onChange={handleChange}></input>

			<button onClick={fetchNewGif}>Search</button>

			<div>
				<h3> Results</h3>
				{/* <div key={image.id}>
					{gifResult.map(image => {
						<img scr={image.data} />;
					})}
				</div> */}
			</div>
		</div>
	);
}
