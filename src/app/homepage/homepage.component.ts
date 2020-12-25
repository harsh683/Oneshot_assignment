import { Component, OnInit } from '@angular/core';
import { GetCollegesService } from '../get-colleges.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  colleges = []
  states = []
  
  constructor(private getColleges : GetCollegesService){
    
  }

ngOnInit() : void{
  this.getColleges.getcolleges().subscribe(data=>{ 
    this.colleges = data
    console.log(this.colleges.length)
    this.colleges.forEach(state => {
      this.states.push(state.state)
    });
  })
  console.log(this.states)
  
}

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: "States" }
  ];

}
