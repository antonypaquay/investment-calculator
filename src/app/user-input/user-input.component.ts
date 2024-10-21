import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentInput } from "../investment-input.model";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "5";
  enteredDuration = "10";

  onSubmit() {
    console.log("SUBMIT");

    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }
}
