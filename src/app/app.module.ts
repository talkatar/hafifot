import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dynamiccomponent1Component } from './cmps/dynamiccomponent1/dynamiccomponent1.component';
import { DynamicComponentComponent } from './cmps/dynamic-component/dynamic-component.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { HoverColorDirective } from './directive/hover-color.directive';
import { DialogMaterialComponent } from './cmps/dialog-material/dialog-material.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DynmaicCmpsExComponent } from './views/dynmaic-cmps-ex/dynmaic-cmps-ex.component';
import { CssExComponent } from './views/css-ex/css-ex.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { DirectivesExComponent } from './views/directives-ex/directives-ex.component';
import { DialogExComponent } from './views/dialog-ex/dialog-ex.component'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouteComponent } from './views/route/route.component';
import { RouteColorDirective } from './directive/route-color.directive'; 
import { MyfirstnpmModule } from "myfirstnpmtalhafifot";
import { CustomPopupComponent } from './cmps/custom-popup/custom-popup.component';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    Dynamiccomponent1Component,
    DynamicComponentComponent,
    HoverColorDirective,
    DialogMaterialComponent,
    DynmaicCmpsExComponent,
    CssExComponent,
    AppHeaderComponent,
    DirectivesExComponent,
    DialogExComponent,
    RouteComponent,
    RouteColorDirective,
    CustomPopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AgGridModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MyfirstnpmModule,
    ToastrModule.forRoot(),
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/// TODO - ON THE UI:
// 1. BUG: after the login the user name is not shown in the toast
// 2. we dont want the user to be able using the website without login
// 3. for next cr - all the website should be in hebrew
// 4. bug in the counter: "Todos i have"
// 5. add option to logout