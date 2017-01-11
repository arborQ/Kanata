import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: '<div>test app {{AppName}}</div>'
})
class AppComponent {
    AppName= 'test???';
}

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ BrowserModule ],
  declarations: [
    AppComponent 
  ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);