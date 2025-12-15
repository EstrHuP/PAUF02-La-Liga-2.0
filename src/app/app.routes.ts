import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { TeamsPage } from './features/teams/pages/teams-page/teams-page';

export const routes: Routes = [
    // HOME
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path:'home', component: HomePage },

    // TEAMS
    {
        path: '',
        redirectTo: 'teams',
        pathMatch: 'full'
    },
    { path:'teams', component: TeamsPage }
];
