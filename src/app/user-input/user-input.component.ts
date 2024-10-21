import { Component, signal, inject } from '@angular/core';
import { InvestmentService } from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn = signal("5");
  enteredDuration = signal("10");

  private investmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
    this.enteredInitialInvestment = signal("0");
    this.enteredAnnualInvestment = signal("0");
    this.enteredExpectedReturn = signal("5");
    this.enteredDuration = signal("10");
  }
}
