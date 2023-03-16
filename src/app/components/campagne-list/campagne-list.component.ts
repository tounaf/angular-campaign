import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service';

import { CampaignService } from "../../service/campaign.service";

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
    private httpClient: HttpClientService,
    private router: Router,
    private campaignService: CampaignService
  ) { }
  
  ngOnInit() {
    this.campaignForm = this.fb.group({
      name: '',
      brand: '',
    });

    this.displayedColumns = ['requestStatus', 'campaignName', 'advice', 'brand', 'submittedDate','actions'];
    this.getAllBrands();
    this.getAllCampaigns();
  }

  getAllCampaigns() {
    this.campaignService.getAllCampaigns().subscribe((response) => {
      this.campaigns = response;
      this.dataSource = new MatTableDataSource<any>(response.requests);
    });
  }

  getAllBrands() {
    this.campaignService.getAllBrands().subscribe((response) => {
        this.brands = response;
    });
  }

  submitForm() {

    //const data = JSON.stringify(this.campaignForm.value);
    const data = this.campaignForm.value;
    //@ts-ignore
    const campaigns = this.campaigns.requests.filter((c) => {
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
    
  }

  resetForm() {
    this.campaignForm = this.fb.group({
      name: '',
      brand: '',
    });

    this.getAllCampaigns();
  }

  editCampaign(campaign: any) {
    this.router.navigate(['/campagne/edit', campaign.requestId]);
  }

}
