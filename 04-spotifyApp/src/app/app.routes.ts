import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'Home' },
    { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
