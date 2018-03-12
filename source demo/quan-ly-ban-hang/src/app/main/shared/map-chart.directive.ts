import { Component } from '@angular/core';
import './../../../assets/management/javascripts/ammap.js';
import './../../../assets/management/javascripts/worldLow.js';
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
    selector: 'map-chart',
    templateUrl: './map-chart.html',
    styleUrls: ['./../../../assets/management/stylesheets/ammap.css']
})
export class MapChartComponent { //muốn sử dụng AmCharts thì phải có contructor vì amchart có 1 thư viện.
    //cách sử dụng AmChart
    private chart: any;

    constructor(private AmCharts: AmChartsService) { }

    ngOnInit() {
        this.chart = this.AmCharts.makeChart("mapdiv", {
            type: "map",


            dataProvider: {
                map: "worldLow",
                getAreasFromMap: true
            },

            areasSettings: {
                autoZoom: true,
                selectedColor: "dark"
            },
            smallMap: {}
        });
    }
}