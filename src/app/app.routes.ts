import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path:'',component: BodyComponent,data:{animation:'contacts-animation'}},
    {path:'contacts',component: ContactsComponent,data:{animation:'home-animation'}},
];
