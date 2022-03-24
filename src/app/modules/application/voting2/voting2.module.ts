import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingResultsComponent } from './voting-results/voting-results.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: VotingResultsComponent },
];


@NgModule({
  declarations: [
    VotingResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Voting2Module { }
