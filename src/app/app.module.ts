import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './globalComponents/navbar/navbar.component';
import { FooterComponent } from './globalComponents/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LeftsideComponent } from './content/leftside/leftside.component';
import { CanvasComponent } from './content/canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    LeftsideComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
