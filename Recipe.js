const searchbox = document.querySelector('.searchbox');
const searchbtn = document.querySelector('.searchbtn');
const recipecontainer = document.querySelector('.recipe-container');
// functions
const fetchRecipes =async (query) => {
  recipecontainer.innerHTML="<h2>fetching Recipes......</h2>";
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const response = await data.json();

  recipecontainer.innerHTML= "";
  response.meals.forEach(meal =>{
  const recipeDiv = document.createElement('div');
  recipeDiv.classList.add('recipe');
  recipeDiv.innerHTML=`
  <img src="${meal.strMealThumb}">
  <h3>${meal.strMeal}</h3>
  <p><span> ${meal.strArea}</span>Dish</P>
  <p> Belongs to <span>${meal.strCategory}</span>Category </P>
  
  `
  const button= document.createElement('button');
  button.textContent="view recipe";
  recipeDiv.appendChild(button);

  recipecontainer.appendChild(recipeDiv);
  });

  //response.meals.foreach(meal =>{

}
searchbtn.addEventListener('click' , (e) => {
  e.preventDefault();
  const searchInput = searchbox.value.trim();
  fetchRecipes(searchInput);
  
  //console.log("button clicked");
  
});