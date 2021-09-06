import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  $data = this.http.get('https://jsonplaceholder.typicode.com/todos/1')

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.$data.subscribe(data => {
      
    })
  }

}
