import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageDetailList: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.database.list('Details');
  }

  imageDetails(Details) {
    this.imageDetailList.push(Details);

  }
}
