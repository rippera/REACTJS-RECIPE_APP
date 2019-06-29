import React from 'react';

const Recipe = ({title,calories,image,ingredients})=>{
    return(
        <div className="col-lg-4 col-sm-6">
            <div className="recipe_box">
                <h1 className="title"><span>title</span> : {title}</h1>
                <p className="calories">calories : {calories.toFixed(0)}</p>
                <div className="img_box">
                    <img className='img_fluid' src={image} alt=""/>
                </div>
                <p className="ingredients">ingredients</p>
                <ul className="recip_ul">
                    {ingredients.map(ingredient=>(
                        
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Recipe;