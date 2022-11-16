import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import items from '../utils/data';

const allCategories = ['alla', ...new Set(items.map((item) => item.category))];

export const Context = createContext();
export const ContextProvider = ({ children }) => {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(false);
	const [cocktails, setCocktails] = useState([]);

	// Filter catefories
	const filterItems = (category) => {
		if (category === 'alla') {
		  setMenuItems(items);
		  return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	// Fetch cocktails Api
	const fetchDrinks = async () => {
		setLoading(true)
		try {
			const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
			const { drinks } = data;
			console.log(drinks)

			if(drinks){
				const newCocktails = drinks.map((item) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item 
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass
					}
				})
				setCocktails(newCocktails)
			} else {
				setCocktails([])
			}
			setLoading(false)
			
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}


	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, ])


	return (
		<Context.Provider value={{ 
			menuItems, setMenuItems, 
			categories, setCategories,
			searchTerm, setSearchTerm,
			filterItems,
			cocktails, setCocktails
			}}>
			{children}
		</Context.Provider>
	);
};