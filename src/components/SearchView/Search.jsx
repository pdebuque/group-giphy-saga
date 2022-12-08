import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SearchView() {
	const dispatch = useDispatch();
	const [viewSearch, setSearch] = useState('');

	const handleChange = e => {
		e.preventDefault();
		console.log('In search input field');
		setSearch(e.target.value);
	};

	const fetchNewGif = () => {
		console.log('Clicked on Search button in Search.jsx');
		dispatch({
			type: '',
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
				onChange={handleChange}>
				{' '}
			</input>

			<button onClick={fetchNewGif}>Search</button>
		</div>
	);
}
