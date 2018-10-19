import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SidenavModule } from '@verval/sidenav';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), SidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
