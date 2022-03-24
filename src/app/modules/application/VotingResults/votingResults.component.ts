import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { Item } from '../boxoffice/items/item';
import { ItemsService } from '../boxoffice/items/items.service';
import { environment } from '../../../../environments/environment';
import { ChartData, ChartOptions } from 'chart.js';


declare const bootstrap: any;

@Component({
  selector: 'app-votingResults',
  templateUrl: './votingResults.component.html',
  styleUrls: ['./votingResults.component.css']
})
export class votingResultsComponent implements OnInit {

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
       /* display: true,
        text: 'Monthly Sales Data',*/
      },
    },
  };
  salesData: ChartData<'bar'> = {
    labels: ['Jan'],
    datasets: [
      { label: 'yes', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'No', data: [200, 100, 400, 50, 90] },
    ],
  };
  itemsLoaded: boolean;
  items: Item[];
  player: string;
  playerLoaded: boolean;
  modalPlayer: any;

  formFilter = this.fb.group({
    shows: [''],
    movies: [''],
    clips: [''],
    games: [''],
  });

  constructor(
    public router: Router,
    private itemsService: ItemsService,
    private fb: FormBuilder) {

    this.player = '';
    this.playerLoaded = false;

    this.items = [];
    this.itemsLoaded = false;

    this.formFilter.setValue({
      shows: true,
      movies: true,
      clips: true,
      games: true,
    });

    /*    this.formFilter = new FormGroup({
          toto: new FormControl(),
          movie: new FormControl(),
          clip: new FormControl(),
          game: new FormControl(),
        });
    
        this.formFilter.setValue({
          toto: true,
        });  */

  }

  ngOnInit(): void {
    this.getItems();

    this.formFilter.valueChanges
      .subscribe(data => {
        this.formFilterChanged(data);
      });

  }

  formFilterChanged(data: any) {
    const shows = data["shows"];
  };

  getItems(): any {
    const url = environment.urlMovies;
    this.itemsService.getItems(url)
      .subscribe(
        items => {
          this.itemsLoaded = true;
          this.items = items;
        }
      );
  }

  onSelectItemTrailer(item: any, id: any) {
    this.router.navigate(['/boxoffice',item.VotingboxID]);
    /*this.player = item.youtubeLink;
    this.playerLoaded = true;
    if (this.modalPlayer === undefined) {
      this.modalPlayer = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: true
      })
      const selectPlayer = document.getElementById('exampleModal')
      selectPlayer?.addEventListener('show.bs.modal', this.onShowModal.bind(this));
      selectPlayer?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modalPlayer?.show();*/
  }

  onShowModal() {
  }

  onCloseModal() {
    this.player = '';
    this.playerLoaded = false;
  }

  addItem() {
    this.router.navigate(['/movies', 0]);
  }
  GetStatus(status: number):any{

    switch(status){
    case 1:
      return "not yet open"
    case 2:
      return "open for voting"
    }
  }
  GetClassStatus(status: number):any{
    console.log(status);
    switch(status){
      case 1:
        return "btn btn-primary me-2"
      case 2:
        return "btn btn-success me-2"
      }
  }
}

