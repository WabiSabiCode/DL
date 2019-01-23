import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule,
  MatTableModule, MatCardModule, MatTooltipModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './header/menubar/menubar.component';
import { IngredientpageComponent } from './ingredientpage/ingredientpage.component';
import { HaircarepageComponent } from './haircarepage/haircarepage.component';
import { ProductsComponent } from './productspage/products/products.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { HighlightPipe } from './ingredientpage/highlight.pipe';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'check', component: IngredientpageComponent },
  { path: 'care', component: HaircarepageComponent },
  { path: 'products', component: ProductspageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    IngredientpageComponent,
    HaircarepageComponent,
    ProductsComponent,
    ProductspageComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatIconModule,MatInputModule,MatTableModule,
    MatTooltipModule, MatCardModule,
    RouterModule.forRoot(appRoutes),
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
