import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ResizableModule } from 'angular-resizable-element';

import { AppComponent } from './app.component';
import { SvgEditorInformationComponent } from './components/svg-editor-information/svg-editor-information.component';
import { SvgEditorComponent } from './components/svg-editor/svg-editor.component';
import { HttpResponseInterceptor } from './interceptors/http-response.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SvgEditorComponent,
    SvgEditorInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ResizableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
