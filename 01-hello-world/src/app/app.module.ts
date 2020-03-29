import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {FooterComponent} from './components/footer/footer.component';
import {PdfLectorComponent} from './components/pdf-lector/pdf-lector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PdfLectorComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
