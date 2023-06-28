import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
    { path: 'forgot-password', loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
    { path: 'login-resident', loadChildren: () => import('./pages-resident/login-resident/login-resident.module').then(m => m.LoginResidentModule) },
    { path: 'forgot-password-resident', loadChildren: () => import('./pages-resident/forgot-pass-resident/forgot-pass-resident.module').then(m => m.ForgotPassResidentModule) },
    { path: 'dashboard-resident', loadChildren: () => import('./pages-resident/dashboard-resident/dashboard-resident.module').then(m => m.DashboardResidentModule) },
    
];

export const routing = RouterModule.forRoot(ROUTES);
