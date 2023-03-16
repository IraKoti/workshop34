import { HttpClient } from "@angular/common/http";
import { Injectable,Component } from "@angular/core";
import { Subject } from "rxjs";
import { countrycode } from "./models";

const COUNTRYCODE_URL:string = "https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json"

@Injectable()
export class CountryService {

    countries = new Subject<countrycode[]>
    countryinfo: any;



}
