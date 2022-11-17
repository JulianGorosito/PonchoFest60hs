import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messagesElement : any;
  constructor() { }

  ngOnInit(): void {
  }

}

function enviar(user : String, gmail : String, text : String) {
  console.log(user, gmail, text)
}
