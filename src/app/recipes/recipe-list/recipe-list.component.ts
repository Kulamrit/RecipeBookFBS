import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is description','https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/istock-527028804.jpg?itok=VtQBDIcm&resize=450x200'),
    new Recipe('A Test 2 Recipe', 'This is 2nd description','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzkltzAsC9_730ut7G4AhKSoMFoaWdyr2RTgdxULumeZ1HcnFk'),
    new Recipe('A Test 3 Recipe', 'This is 3rd description','https://medlineplus.gov/images/HerbalMedicine.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
