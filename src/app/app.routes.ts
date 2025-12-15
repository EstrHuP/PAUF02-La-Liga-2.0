import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { TeamsPage } from './features/teams/pages/teams-page/teams-page';
import { ResultsPage } from './features/results/pages/results-page/results-page';
import { ClasificationsPage } from './features/clasifications/pages/clasifications-page/clasifications-page';

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
    { path:'teams', component: TeamsPage },

    // RESULTS
    {
        path: '',
        redirectTo: 'results',
        pathMatch: 'full'
    },
    { path:'results', component: ResultsPage },

    // CLASIFICATIONS
    {
        path: '',
        redirectTo: 'clasifications',
        pathMatch: 'full'
    },
    { path:'clasifications', component: ClasificationsPage }
];
