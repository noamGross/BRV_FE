import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../boxoffice/items/items.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-voting-results',
  templateUrl: './voting-results.component.html',
  styleUrls: ['./voting-results.component.css']
})
export class VotingResultsComponent implements OnInit {

  items: any[]=[];
  itemsLoaded:boolean=false;

  constructor( private itemsService: ItemsService) {
    this.itemsService = itemsService;
  }

  ngOnInit(): void {

    this.getItems();
  }

  getItems(): any {
    const url = environment.urlVotes;
    this.itemsService.getItems(url)
      .subscribe(
        items => {
          this.itemsLoaded = true;
          this.items = items;
        }
      );
  }

}
