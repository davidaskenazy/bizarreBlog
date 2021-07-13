import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Observable } from 'rxjs';
import {ListState} from './Models/list.models'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bizarre-blog';
  public list: ListState[]
  public datos$: Observable<any>

  constructor(
    private store : Store<ListState>
  ){
    this.datos$ = this.store.select('list')
  }
  ngOnInit(){
    console.log(this.datos$)
  }

}
