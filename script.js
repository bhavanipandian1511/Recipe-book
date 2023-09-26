// Sample data to simulate recipe storage
const recipes = [];

// Function to add a recipe to the list
function addRecipe(name, ingredients, instructions, category) {
    const recipe = {
        name,
        ingredients,
        instructions,
        category,
    };
    recipes.push(recipe);
}

// Function to display recipes in the list
function displayRecipes(filterCategory = '') {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        if (!filterCategory || filterCategory === recipe.category) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${recipe.name}</strong><br>Ingredients: ${recipe.ingredients}<br>Instructions: ${recipe.instructions}<br>Category: ${recipe.category}`;
            recipeList.appendChild(listItem);
        }
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('category').value;

    if (recipeName && ingredients && instructions && category) {
        addRecipe(recipeName, ingredients, instructions, category);
        displayRecipes();
        document.getElementById('recipe-form').reset();
    }
}

// Function to handle category filter change
function handleCategoryFilterChange() {
    const filterCategory = document.getElementById('filter-category').value;
    displayRecipes(filterCategory);
}

// Attach event listeners
document.getElementById('recipe-form').addEventListener('submit', handleFormSubmit);
document.getElementById('filter-category').addEventListener('change', handleCategoryFilterChange);

// Display recipes on page load
displayRecipes();
