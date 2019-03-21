import { Component, OnInit } from '@angular/core';
import { ParkData } from '../../providers/park-data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {
  parks: Array<Object> = [];

  constructor(public NavCtrl: NavController, public parkData: ParkData) {
    ParkData.getParks().then(theResult => {
      this.parks = theResult;
    })
   }
   goParkDetails(theParkData) {
     console.log(theParkData);
    }
   }

  ngOnInit() {
  }

}
