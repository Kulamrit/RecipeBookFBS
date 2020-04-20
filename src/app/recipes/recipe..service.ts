import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is description',
        'https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/istock-527028804.jpg?itok=VtQBDIcm&resize=450x200',
        [new Ingredient('Onion',2), new Ingredient('Ginger',3)]),
        new Recipe('A Test 2 Recipe', 
        'This is 2nd description',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzkltzAsC9_730ut7G4AhKSoMFoaWdyr2RTgdxULumeZ1HcnFk',
        [new Ingredient('Cauliflower',3), new Ingredient('Potato',5)]),
        new Recipe('A Test 3 Recipe', 
        'This is 3rd description',
        'https://medlineplus.gov/images/HerbalMedicine.jpg',
        [new Ingredient('Garlic',2),new Ingredient('Paneer',3)])
      ];

     getRecipes()
     {
         return this.recipes.slice();
     } 
}