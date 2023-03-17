import { HttpClient } from '@angular/common/http'
import {firstValueFrom, map, Subject} from "rxjs";
import { CountryCode } from './models'
import { COUNTRYCODE_URL } from './constants'
import {Injectable} from "@angular/core";

@Injectable()
export class NewsService 
{
    private countries: CountryCode[] = []
    
    constructor (private http: HttpClient) {}    
    
    getCountryCode()
    {
        this.http.get(COUNTRYCODE_URL).subscribe((response) => 
        {
            this.countries =  Object.values(response).map(
                (c:any) => (
                {
                    code: c.Code,
                    name: c.Name
                } as CountryCode
            ) ) 
            return this.countries;
        })
        
    }
}