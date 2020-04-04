import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { WorkboardComponent } from './workboard/workboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: 'workboard',
        component: WorkboardComponent
    },
    {
        path: '**',
        component: IntroComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }