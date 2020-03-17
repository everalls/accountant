import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReportsService } from "../../services/reports.service";
import { CustomerReportModel } from "src/app/models/customerReportModel";
import { CustomersService } from 'src/app/services/customers.service';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FullCustomerModel } from 'src/app/models/fullCustomerModel';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD MMMM YYYY',
  },
};

@Component({
  selector: "app-report-details",
  templateUrl: "./report-details.component.html",
  styleUrls: ["./report-details.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ReportDetailsComponent implements OnInit {
  customerData: FullCustomerModel;
  panelOpenState = false;
  reportId: string;
  reportsData;
  selectePCNReportdDate = new FormControl(new Date());
  selectedArrivedDate = new FormControl(new Date());
  selectedStartJobDate = new FormControl(new Date());
  selectedModifiedDate = new FormControl(new Date());
  selectedEndReportDate = new FormControl(new Date());
  selectedDates = {
    selectePCNReportdDate: new FormControl(new Date()).value.toString(),
    selectedArrivedDate: new FormControl(new Date()).value.toString(),
    selectedStartJobDate: new FormControl(new Date()).value.toString(),
    selectedModifiedDate: new FormControl(new Date()).value.toString(),
    selectedEndReportDate: new FormControl(new Date()).value.toString()
  }

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportsService,
    private customerService: CustomersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reportId = params["id"];
      this.getReportDetails(this.reportId)
    });
    // console.log(this.selectePCNReportdDate.value);

  }

  getReportDetails(reportId) {
    this.reportsData = this.reportService.getReportById(reportId);
    this.getCustomersDetails(this.reportsData.customerID);
  }

  getCustomersDetails(customerId) {
    // this.customerData = this.customerService.getFullCustomerInfoById(customerId);
  }

  saveReportData() {
    this.selectedDates.selectePCNReportdDate = this.selectePCNReportdDate.value.toString();
    this.selectedDates.selectedArrivedDate = this.selectedArrivedDate.value.toString();
    this.selectedDates.selectedStartJobDate = this.selectedStartJobDate.value.toString();
    this.selectedDates.selectedModifiedDate = this.selectedModifiedDate.value.toString();
    this.selectedDates.selectedEndReportDate = this.selectedEndReportDate.value.toString();

    console.log('event', this.selectedDates);


  }
}