import { Component,Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { CountryCode } from '../models'
import { NewsService } from '../news.service'
import { NEWS_CATEGORIES } from '../constants'


@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent implements OnInit{
  @Input()
 countried: CountryCode[] = []
 categories = NEWS_CATEGORIES
 form!: FormGroup

 constructor (private fb: FormBuilder, private newssvc: NewsService) {}

 
 
 ngOnInit(): void {
  this.countried = this.newssvc.getCountryCode()
  this.form = this.fb.group({
    code: this.fb.control('',[Validators.required]),
    category: this.fb.control ('',[Validators.required])
  })
 }
}
