import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssExComponent } from './views/css-ex/css-ex.component';
import { AppComponent } from './app-root/app.component';
import { DynmaicCmpsExComponent } from './views/dynmaic-cmps-ex/dynmaic-cmps-ex.component';
import { TodosExComponent } from './views/todos-ex/todos-ex.component';
import { DirectivesExComponent } from './views/directives-ex/directives-ex.component';
import { DialogExComponent } from './views/dialog-ex/dialog-ex.component';
import { RouteComponent } from './views/route/route.component'
import { GlobalVariables } from '../../environment'

DialogExComponent
const routes: Routes = [
  {
    path: '.',
    component: AppComponent,
},
  {
    path:GlobalVariables.cssExComponentPath,
    component: CssExComponent,
},
{
  path:GlobalVariables.dynmaicCmpsExComponentPath,
  component: DynmaicCmpsExComponent,
},
{
  path:GlobalVariables.todosExComponentPath,
  component: TodosExComponent,
  loadChildren:()=> import('./todos/todos.module').then(m=>m.TodosModule)
},
{
  path:GlobalVariables.directivesExComponentPath,
  component: DirectivesExComponent,
},
{
  path:GlobalVariables.dialogExComponentPath,
  component: DialogExComponent,
},
{
  path:GlobalVariables.routeComponentPath,
  component: RouteComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}


