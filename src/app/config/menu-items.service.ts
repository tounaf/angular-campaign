import { Injectable } from '@angular/core';
import {Route} from './routes';

export interface Menu {
  path: string[];
  icon: string;
  label: string;
  child: any;
}

export const MenuItems: Menu[] = [
  {
    path: ['#'],
    icon: 'settings',
    label: 'CAMPAGNES',
    child: [
      {
        path: ['/', Route.campagne, Route.list],
        label: 'Liste',
        icon: '',
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {

  getMenus(): Menu[] {
    return MenuItems;
  }
}
