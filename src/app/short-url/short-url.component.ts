import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/http-service.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  public extenderUrl: any = "";
  public resultUrl:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!!this.extenderUrl && this.extenderUrl.includes("http")){

      let headers = new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b1d1c2afd2msh893ecd318c1543fp1bdb1ajsn6e8355a34ceb',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },)
  
      let data = `url=${this.extenderUrl}`
      this.http.post('https://url-shortener-service.p.rapidapi.com/shorten',data, {headers : headers})
        .subscribe(
          (res) => {
            console.log(res);
            this.resultUrl =  res;
          },
          (err) => {
            console.log(err.message);
            return err
          }
        );
      console.log(this.resultUrl,"resultUrl")
      
    }
  }

}
