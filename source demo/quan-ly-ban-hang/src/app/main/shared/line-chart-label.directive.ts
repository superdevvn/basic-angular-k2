import { Component } from '@angular/core';

@Component({
    selector: 'line-chart-label',
    templateUrl: './line-chart-label.html'
})
export class LineChartLabelComponent {
    // lineChart
    randomNumber: number = 0;

    ngOnInit() {
        // setInterval(() => {
        //     this.randomNumber = Math.floor((Math.random() * 100) + 30);
        //     // this.randomNumber2 = Math.floor((Math.random() * 100) + 30);
        //     // this.randomNumber3 = Math.floor((Math.random() * 100) + 30);
        // }, 100);

    }

    ngViewAfterInit() {
        this.randomNumber = this.randomNumber = Math.floor((Math.random() * 100) + 30);
        alert(this.randomNumber);
    }
    public lineChartData: Array<any> = [
        [this.randomNumber, 55, 77, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels: Array<any> = ['Export', 'Import', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType: string = 'line';
    public pieChartType: string = 'pie';
}
