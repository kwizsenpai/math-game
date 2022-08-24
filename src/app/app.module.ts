import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EquationComponent } from './core/components/equation/equation.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EquationComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
