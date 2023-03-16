import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-campagne-list',
  templateUrl: './campagne-list.component.html',
  styleUrls: ['./campagne-list.component.scss']
})
export class CampagneListComponent implements OnInit {
  campaignForm: FormGroup;
  attributes = ['Attribut 1', 'Attribut 2', 'Attribut 3'];
  features = ['Caractéristique 1', 'Caractéristique 2', 'Caractéristique 3'];
  brandUrl = '/assets/data/brands.json';
  url = '/assets/data/payload-rmp.json'
  dataSource =  new MatTableDataSource<any>();
  campaigns = [];
  brands = [];
  displayedColumns = [];
  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private httpClient: HttpClientService
  ) { }
  
  ngOnInit() {
    this.campaignForm = this.fb.group({
      name: '',
      brand: '',
    });

    /*this.dataSource = new MatTableDataSource<any>([
      {
        requestStatus: {
          requestStatusId: 4,
          name: "TO_MODIFY",
          value: "To modify",
          step: 1
        },
         campaignName: 'Test name', 
         advice: true, 
         brand: {
           brandId: 12,
          name: "Brand 12"
        }, 
        submittedDate: '2020-06-19T12:09:26.6666667+00:00'
      }
    ]);*/

    this.displayedColumns = ['requestStatus', 'campaignName', 'advice', 'brand', 'submittedDate'];
    this.getAllBrands();
    this.getAllCampaigns();
    console.log(this.dataSource);
  }

  getAllCampaigns() {
    this.httpClient.get(this.url).subscribe((response) => {
      this.campaigns = response;
      this.dataSource = new MatTableDataSource<any>(response.requests);
        console.log(response);
    });
  }

  getAllBrands() {
    this.httpClient.get(this.brandUrl).subscribe((response) => {
        this.brands = response;
        console.log(response);
    });
  }

  submitForm() {

    //const data = JSON.stringify(this.campaignForm.value);
    const data = this.campaignForm.value;
    console.log(data);
    //@ts-ignore
    const campaigns = this.campaigns.requests.filter((c) => {
      console.log(c.campaignName.includes(data.name) || c.brand.brandId === data.brand);
      console.log('================')
      console.log('name : ' + c.campaignName + ', ' + data.name );
      console.log('brand :' + c.brand.brandId +  ', ' + data.brand);
      let foundName = false;
      if(data.name !== '') {
        foundName = c.campaignName.includes(data.name);
      }
      let foundBrand = false;
      if(data.brand !== '') {
        foundBrand =  c.brand.brandId === data.brand
      }
      return foundName || foundBrand;
        
    })
    this.dataSource = new MatTableDataSource<any>(campaigns);
    return;
    this.httpClient.pos('/products', data).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  resetForm() {
    this.campaignForm = this.fb.group({
      name: '',
      brand: '',
    });

    this.getAllCampaigns();
  }

}
