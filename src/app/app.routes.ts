import { Routes } from '@angular/router';
import { Admin } from './compnents/admin/admin';
import { Controlflow } from './compnents/controlflow/controlflow';
import { SignalEx } from './compnents/signal-ex/signal-ex';
import { AttDirective } from './compnents/att-directive/att-directive';
import { Getapi } from './compnents/getapi/getapi';
import { User } from './compnents/user/user';

export const routes: Routes = [
    {
        path:"Admin",
        component: Admin
    },
    {
        path:"ControlFlow",
        component: Controlflow
    },
    {
        path:"Signal",
        component: SignalEx
    },
    {
        path:"Directive",
        component: AttDirective
    },
    {
        path:"GetApi",
        component: Getapi
    }
    ,
    {
        path:"User",
        component: User
    }
];
