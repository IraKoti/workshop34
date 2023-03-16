import { Component,Input } from '@angular/core';
import { countrycode } from '../models'


@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent {

 @Input()
 countries!: countrycode[]

}
