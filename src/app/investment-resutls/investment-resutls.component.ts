import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-resutls',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-resutls.component.html',
  styleUrl: './investment-resutls.component.css'
})
export class InvestmentResutlsComponent {
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }
}
