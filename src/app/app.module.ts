import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';




import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    
    
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    { provide:'BaseURL', useValue: baseURL}
    
  ],
  entryComponents: [
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
