import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../boxoffice/items/items.service';
import { environment } from '../../../../../environments/environment';
import { ChartData, ChartOptions } from 'chart.js';

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

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
       /* display: true,
        text: 'Monthly Sales Data',*/
      },
    },
  };

  // salesData: ChartData<'bar'> = {
  //   labels: ['Voting Result'],
  //   datasets: [
  //     { label: 'yes',backgroundColor:'green', data: [Math.random() *  1000] },
  //     { label: 'No',backgroundColor:'red', data: [Math.random() * 200] },
  //   ],
  // };

  salesData(): ChartData<'bar'> { return {
    labels: ['Voting Result'],
    datasets: [
      { label: 'yes',backgroundColor:'green', data: [Math.random() *  1000] },
      { label: 'No',backgroundColor:'red', data: [Math.random() * 200] },
    ],
  }
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
