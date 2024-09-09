import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {path: '',redirectTo:'home',  pathMatch: 'full'},
    {path:'home',component: BodyComponent,data:{animation:'contacts-animation'} },
    {path:'contacts',component: ContactsComponent,data:{animation:'home-animation'} },
    {path:'shop',component: ShopComponent,data:{animation:'shop-animation'} }
];
