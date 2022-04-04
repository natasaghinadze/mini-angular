import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoChildOneComponent } from './page-two/page-two-child-one/page-two-child-one.component';
import { PageTwoChildTwoComponent } from './page-two/page-two-child-two/page-two-child-two.component';
import { PageTwoComponent } from './page-two/page-two.component';


const routes: Routes = [
  {
    path: 'PageOne',component:PageOneComponent
  },
  {
    path: 'PageTwo',
     component: PageTwoComponent, 
     children: [

      {path: 'PageTwoChildOne', component: PageTwoChildOneComponent},

      {path: 'PageTwoChildTwo', component: PageTwoChildTwoComponent}
      
    ]
  },
  {
    path: '', redirectTo: 'PageOne', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
