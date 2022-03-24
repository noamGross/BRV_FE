import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { votingResultsComponent } from './votingResults.component';

const routes: Routes = [
  { path: '', component: votingResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  votingResultsRoutingModule  { }