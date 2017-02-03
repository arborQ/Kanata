import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  styleUrls: [ '../bower_components/material-design-lite/src/layout/_layout.scss' ],
  template: `
  <div class="demo-layout-transparent mdl-layout mdl-js-layout">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{{AppName}}</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">{{AppName}}</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
    </main>
  </div>
  `
})
class AppComponent {
    AppName = 'Material';
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