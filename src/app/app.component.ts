import { Component, OnInit, Renderer2 } from '@angular/core';
import { ReportsService } from './services/reports.service';
import { DateFilterModel } from './models/dateFilterModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private render: Renderer2){
  }

  routeSidebar(event:any){    
    // event.preventDefault();
    // event.preventDefault();
this.render.addClass(event.target, "active");

  }
}
