import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'workshop34';
//   newsform!: FormGroup
//   countries: countrycode[] = []
  
    
//   ngOnInit(): void {
//     this.getCountryCode()
//   }
// constructor (private http: HttpClient) {}

// getCountryCode()
// {
//   const COUNTRYCODE_URL:string = "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json"
//   //const COUNTRYCODE_URL:string = "https://gist.githubusercontent.com/ssskip/5a94bfcd2835bf1dea52/raw/3b2e5355eb49336f0c6bc0060c05d927c2d1e004/ISO3166-1.alpha2.json"
//   this.http.get(COUNTRYCODE_URL).subscribe((response) => 
//   {
//     this.countries =  response as countrycode[]
//     console.info(this.countries)
//   })
// }

}
