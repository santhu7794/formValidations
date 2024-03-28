import { Routes } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {path:'',component:TdfComponent},
    {path:'tdf',component:TdfComponent},
    {path:'reactive-forms',component:ReactiveFormsComponent}
];
