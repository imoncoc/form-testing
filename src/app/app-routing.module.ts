import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactFormNameCheckerComponent } from './react-form-name-checker/react-form-name-checker.component';

const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  {
    path: 'reactive-form-name-checker',
    component: ReactFormNameCheckerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
