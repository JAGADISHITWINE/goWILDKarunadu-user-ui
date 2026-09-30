import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TrekOperationsService, WalletData } from '../core/trek-operations.service';
import { TokenService } from '../core/token.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
})
export class WalletComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  wallet: WalletData = {
    balance: 0,
    bonusBalance: 0,
    totalUsableBalance: 0,
    currency: 'INR',
    transactions: [],
  };

  activeFilter: 'all' | 'credit' | 'debit' = 'all';
  searchQuery = '';

  constructor(
    private operationsService: TrekOperationsService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchWalletData();
  }

  fetchWalletData(): void {
    this.isLoading = true;
    this.errorMessage = '';
    const userId = this.tokenService.getUserId() || undefined;

    this.operationsService.getWallet(userId).subscribe({
      next: (data) => {
        this.wallet = data || {
          balance: 0,
          bonusBalance: 0,
          totalUsableBalance: 0,
          currency: 'INR',
          transactions: [],
        };
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Unable to synchronize your wallet balance at the moment.';
        this.isLoading = false;
      },
    });
  }

  get filteredTransactions(): any[] {
    let txs = this.wallet.transactions || [];

    if (this.activeFilter !== 'all') {
      txs = txs.filter((t) => t.transaction_type === this.activeFilter);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      txs = txs.filter(
        (t) =>
          String(t.reason || '').toLowerCase().includes(q) ||
          String(t.reference_id || '').toLowerCase().includes(q)
      );
    }

    return txs;
  }

  get totalCreditsCount(): number {
    return (this.wallet.transactions || []).filter((t) => t.transaction_type === 'credit').length;
  }

  get totalDebitsCount(): number {
    return (this.wallet.transactions || []).filter((t) => t.transaction_type === 'debit').length;
  }

  navigateToExplore(): void {
    this.router.navigate(['/upcoming-treks']);
  }
}
