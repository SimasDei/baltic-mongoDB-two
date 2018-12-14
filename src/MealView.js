import React from 'react';

export default function MealView (props) {
    let meal = props.data.meals[0]

    return (<div>
        <div>Meal name: {meal.strMeal}</div>
        <div>img</div>
        <div>description</div>
        <div></div>
        <div>reference</div>
        <div>youtube</div>
    </div>)
}