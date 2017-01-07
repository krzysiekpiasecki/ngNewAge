import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SectionDownloadComponent } from './page-section/section-download.component';
import { SectionFeaturesComponent } from './page-section/section-features.component';
import { SectionCtaComponent } from './page-section/section-cta.component';
import { SectionContactComponent } from './page-section/section-contact.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHeaderComponent,
    SectionDownloadComponent,
    SectionFeaturesComponent,
    SectionCtaComponent,
    SectionContactComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
