import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParkData {
    data: any = null;

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('assets/data/data.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }
    getFilteredParks(queryString){
        return this.load().then(Parks => {
            let theFilteredParks: any = [];

            for (let thePark of Parks){
                if (thePark.name.toLowerCase().indexOf(queryString.toLowerCase())
                > -1) {theFilteredParks.push(thepark);
                }
            }
            return theFilteredParks;
        });
        resetList(event) {
            this.parkData.getParks().then(theResult => {
                this.parks = theResult;
            })
        }
    }

    constructor(public http: Http) {}
}