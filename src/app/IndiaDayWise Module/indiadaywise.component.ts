import { Component, OnInit } from '@angular/core';
import { IndiaService } from 'src/app/India Module/india.service';

@Component({
  selector: 'app-indiadaywise',
  templateUrl: './indiadaywise.component.html',
  styleUrls: ['./indiadaywise.component.css']
})
export class IndiadaywiseComponent implements OnInit {
  public DailyData: any;
  constructor(public service: IndiaService) { }

  ngOnInit(): void {
    this.service.IndiaData().subscribe((posres) => {
      this.DailyData = posres.cases_time_series;
      console.log(this.DailyData);
    });
  }

}
