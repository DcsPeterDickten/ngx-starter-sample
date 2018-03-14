import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "books",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule"
  }
];
