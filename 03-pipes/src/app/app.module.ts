import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestPipe } from './pipes/test.pipe';

import { AppComponent } from './app.component';
import { VideoPipePipe } from './pipes/video-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    VideoPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
