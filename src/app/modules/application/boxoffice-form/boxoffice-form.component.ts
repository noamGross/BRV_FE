import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-boxoffice-form',
  templateUrl: './boxoffice-form.component.html',
  styleUrls: ['./boxoffice-form.component.css'],
})
export class BoxofficeFormComponent implements OnInit {
  exampleForm = this.fb.group({
    Company_Name: [''],
    VotingDate: [''],
    SetDate: [''],
    IssueVote: [''],
    voting_details: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      Company_Name: 'Avengers: Endgame',
      VotingDate: '26/04/2019',
      SetDate: '26/04/2019',
      IssueVote:"dsfsdfsdfsd",
      voting_details: 'After the devastating events of Avengers: Infinity War (2018), ' +
        'the universe is in ruins.'
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      Company_Name: null,
      VotingDate: null,
      SetDate: true,
      budget: null,
      IssueVote: null,
      voting_details: null,
    });
  }

  resetFranchise(): void {
    const franchise = !(this.exampleForm.value['franchise']);
    this.exampleForm.patchValue({ franchise: franchise });
  }

}
