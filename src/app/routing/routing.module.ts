import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { BlankComponent } from '../blank/blank.component';
import { SampleFormComponent } from '../sample-form/sample-form.component';
import { LayoutComponent } from '../layout/layout.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes:Routes=[
    {path:'blank', component:BlankComponent},
    {path:'form',component:SampleFormComponent},
    {path:'home',component:HomePageComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RoutingModule{

}