import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { SectionsComponent } from './modules/home/sections/sections.component';
import { BannersComponent } from './modules/home/banners/banners.component';
import { CategoriesComponent } from './modules/home/categories/categories.component';
import { HistoricComponent } from './modules/home/historic/historic.component'
import { FooterComponent } from './modules/footer/footer.component'
import { BestSellersGamesComponent } from './modules/home/best-sellers-games/best-sellers-games.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SectionsComponent,
    BannersComponent,
    CategoriesComponent,
    HistoricComponent,
    FooterComponent,
    BestSellersGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
