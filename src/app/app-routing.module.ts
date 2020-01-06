import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'add', component: AddBookComponent},
  {path:'details', component: BookDetailsComponent},
  {path : 'list', component : BookListComponent},
  {path : 'search', component : SearchBooksComponent},
  {path: 'contact', component: ContactsComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
