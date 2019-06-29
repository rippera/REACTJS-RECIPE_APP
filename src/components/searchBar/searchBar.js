import React,{useEffect, useState} from 'react';
import Recipe from '../recipe/recipe';

const SearchBar = () =>{
    const [recipes, setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('chiken')
    let API_ID = '4eb8c3b3';
    let API_KEY = '4a73c5811c82fb846611dc0dab2612b5';
    let urlLink = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    useEffect(()=>{
        getRecipe();
    },[query]);

    const getRecipe = async ()=>{
        const response = await fetch(urlLink);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }
    const updateSearch = e =>{
        setSearch(e.target.value);
    }
    const getQuery = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
    <div className="">
        <form onSubmit={getQuery} className="searchbar_container">
            <input className="search_input" type="text" placeholder="search" value={search} onChange={updateSearch} />
            <button className="search_btn">search</button>
        </form>
        <div className="row">
            {recipes.map(recipe=>(
                <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    ingredients={recipe.recipe.ingredients}
                    image={recipe.recipe.image}/>
            ))}
        </div>
    </div>
    )
}
export default SearchBar;