import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example.component';
import { ExampleTestComponent } from './components/example/example-test/example-test.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { OtherComponent } from './other/other.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path : '', component: HomeComponent},
    { path : 'contact', component: ContactComponent},
    { path : 'other', component: OtherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ExampleTestComponent,
    HomeComponent,
    ContactComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
