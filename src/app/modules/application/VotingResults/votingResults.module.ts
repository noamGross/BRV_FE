import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { votingResultsComponent } from './votingResults.component';
import { votingResultsRoutingModule } from './votingResults-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    votingResultsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    votingResultsComponent
  ],
  declarations: [
    votingResultsComponent,   
  ],
  providers: [
  ],
})
export class votingResultsModule { }