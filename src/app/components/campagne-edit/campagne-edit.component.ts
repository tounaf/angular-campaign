import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from "../../service/campaign.service";

@Component({
  selector: 'app-campagne-edit',
  templateUrl: './campagne-edit.component.html',
  styleUrls: ['./campagne-edit.component.scss']
})
export class CampagneEditComponent implements OnInit {

  requestId: number;
  campaign: any = { brand: { brandId: null } };  
  brands = [];
  medias = [];
  campaings = [];
  mediasSelected = [];
  campaignForm: FormGroup;

  constructor(
    private campaignService: CampaignService, 
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();

    this.activatedRoute.params.subscribe(param => {
      this.requestId = +param['id'];
    });
    this.getCampaignId();
    this.getBrands();
  }

  initForm() {
    this.campaignForm = this.fb.group({
      brand: [''],
      campaignName: [''],
    }) as FormGroup;
  }

  getCampaignId() {
    this.campaignService.getAllCampaigns().subscribe((response) => {
      this.campaings = response.requests;
      this.getMedias();
      const campaign = this.campaings.filter((item) => {
        return item.requestId === this.requestId;
      })
      
      if(campaign.length > 0) {
        this.campaign = campaign[0];
      }

      console.log('kkkkkkkkk')
      console.log(this.campaign);
     // this.initForm();
    })
  }

  getMedias() {
    //@ts-ignore
    this.campaings.forEach(element => {
      if(this.medias.length === 0) {
        this.medias.push(...element.media);
        
      } else {
        element.media.forEach(media => {
          const mediaExists = this.medias.some(item => media.mediaId === item.mediaId);
          if(!mediaExists) {
            this.medias.push(media);
          }
        })
      }
    });

    console.log('---------media')
    console.log(this.medias);
  }

  getBrands() {
    this.campaignService.getAllBrands().subscribe(response => {
        this.brands = response;
        console.log('---------brands')
        console.log(this.brands);
    });
  }

  onCheckboxChange($event, element) {
    console.log($event);
    if($event.checked) {
      this.mediasSelected.push(element);
    } else {
      this.mediasSelected = this.mediasSelected.filter(item => item.mediaId !== element.mediaId);
    }
    
    console.log(this.mediasSelected);
  }

  submitForm() {

    this.campaignForm.value;
    this.campaign.media = this.mediasSelected;

    console.log(this.campaign);
  }

}
