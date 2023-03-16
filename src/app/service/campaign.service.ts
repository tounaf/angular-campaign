import { Injectable } from '@angular/core';

import {Observable, of, throwError} from 'rxjs';
import {HttpClientService} from '../service/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  
  url = '/assets/data/payload-rmp.json'
  brandUrl = '/assets/data/brands.json';
  constructor(private httpClient: HttpClientService) { }

  getAllCampaigns(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getAllBrands(): Observable<any> {
    return this.httpClient.get(this.brandUrl);
  }

}
