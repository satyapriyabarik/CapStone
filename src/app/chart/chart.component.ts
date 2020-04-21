import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 title="Chart";
 productNames:any;
 public SystemName: string = "Top Rated Products";
 firstCopy = false;
 public lineChartData: Array<number> = [];

 public labelMFL: Array<any> = [
     { data: this.lineChartData,
       label: this.SystemName
     }
 ];
 // labels
// public lineChartLabels: Array<any> = ["2018-01-29 10:00:00", "2018-01-29 10:27:00", "2018-01-29 10:28:00"];
 public lineChartLabels: Array<any> = [];

 public lineChartOptions: any = {
   responsive: true,
   scales : {
     yAxes: [{
       ticks: {
         max : 10,
         min : 1,
       }
     }],
     xAxes: [{
 

       }],
   },
     plugins: {
     datalabels: {
       display: true,
       align: 'top',
       anchor: 'end',
       //color: "#2756B3",
       color: "#222",

       font: {
         family: 'FontAwesome',
         size: 14
       },
     
     },
     deferred: false

   },

 };

  _lineChartColors:Array<any> = [{
      backgroundColor: '#1976d2',
       borderColor: '#1976d2',
       pointBackgroundColor: '#1976d2',
       pointBorderColor: '#1976d2',
       pointHoverBackgroundColor: '#1976d2',
       pointHoverBorderColor: '#1976d2' 
     }];



 public ChartType = 'bar';

 public chartClicked(e: any): void {
   console.log(e);
 }
 public chartHovered(e: any): void {
   console.log(e);
 }

 constructor(private globalService: GlobalService, private httpClient: HttpClient) { }

 ngOnInit() {
// this.getProductUrl();
this.getProductUrl().subscribe(response => {
 this.productNames = response
 this.productNames.forEach(element => {
   this.lineChartLabels.push(element.productName);
   this.lineChartData.push(element.rate)
 });
})
 }
 getProductUrl(){
  return this.httpClient.get(this.globalService.productApi);
 }
getRatingUrl(){
 return this.httpClient.get(this.globalService.ratingApi)
}

}
