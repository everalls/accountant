import { Component, OnInit, Input } from '@angular/core';
// import { ReportsService } from '../services/reports.service';
// import { Router } from '@angular/router';
// import { Indications } from '../Utils/Enums';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  // customers;
  // reports;
  // dataTableArray: any = [];
  // indications = [];
  // indicationsColors = [];
  // displayedColumns: string[] = ['לקוח', 'חודש', 'סטטוס', 'אינדיקציות', 'הערות'];
  // dataSource;
  // currDate = new Date();
  // firstDay = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), 1);
  // date = { startDate: this.firstDay, endDate: this.currDate };
  // customerId = null;
  // statusId = null;

  constructor(
    // private reportsService: ReportsService,
    // private router: Router
    ) { }

  ngOnInit(): void {
    // this.setTableData(this.date, this.customerId, this.statusId);

  }

  // setTableData(date, customerId, statusId) {
  //     this.dataTableArray=[];
  //     this.indications=[];      
  //     this.reports = this.reportsService.getCustomersReports(date, customerId, statusId);
  //     this.customers = this.reportsService.getAllCustomers();
  //     if(this.reports.length <= 0){
  //       alert('לא נמצאו דיווחים לפי הסינון');
  //       for(var i=0 ; i<this.customers.length ; i++)
  //       {
  //         if(this.customers[i].id == customerId)
  //         {
  //          this.dataTableArray.push({companyName:this.customers[i].companyName});
  //         }
  //       // this.reports = this.reportsService.getCustomersReports(null, null, null);
  //       // this.fillDataTableArray();
  //       }
  //     }
  //     else{
  //       this.fillDataTableArray();
  //     }
  //   this.setIndicationColors();
  // }

  // fillDataTableArray(){
  //   for (var j = 0; j < this.reports.length; j++) {
  //     let dataTable: any = { companyName: '', date: '', status: '', color: '', indicationStr: '', comment: '' };
  //     dataTable.companyName = this.reports[j].companyName;
  //     dataTable.date = this.reports[j].date.getMonth() + 1 + '.' + this.reports[j].date.getFullYear();
  //     dataTable.status = this.reports[j].status;
  //     dataTable.color = "green";
  //     this.indications.push(this.reports[j].indication);
  //     dataTable.indicationStr = this.reports[j].indicationStr;
  //     dataTable.comment = this.reports[j].comment;
  //     this.dataTableArray.push(dataTable);
  //   }
  // }


  // setIndicationColors() {
  //   for (var i = 0; i < this.indications.length; i++) {
  //     switch (this.indications[i]) {
  //       case Indications.successfull:
  //         this.dataTableArray[i].color = 'green';
  //         break;

  //       case Indications.pending:
  //         this.dataTableArray[i].color = 'yellow';
  //         break;

  //       case Indications.fail:
  //         this.dataTableArray[i].color = 'red';
  //         break;

  //       default:
  //         this.dataTableArray[i].color = 'white';
  //         break;

  //     }
  //   }
  //   this.dataSource = this.dataTableArray;

  // }


  // showFilterData(event) {

  //   this.customerId = event.company;
  //   this.statusId = event.status;
  //   this.date.startDate = new Date(event.startDate.getFullYear(),event.startDate.getMonth(), 1);
  //   this.date.endDate = new Date(event.endDate.getFullYear(),event.endDate.getMonth()+1, -1);
  //   if(this.statusId == "null")
  //     this.statusId = null;
  //   if(this.customerId == "null"){
  //     this.customerId = null;
  //   }
  //   this.setTableData(this.date,this.customerId , this.statusId);
  
  // }

}
