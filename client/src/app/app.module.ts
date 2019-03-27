import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ServicesComponent } from "./pages/services/services.component";
import { HeaderComponent } from "./pages/partials/header/header.component";
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ServicesComponent,
    HeaderComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule,FlashMessagesModule],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
