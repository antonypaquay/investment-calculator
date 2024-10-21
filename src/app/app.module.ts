import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InvestmentResultsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
