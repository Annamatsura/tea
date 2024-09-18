import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{
  public modal: boolean = false;

  private observable: Observable<boolean> | null
  constructor() {
    this.observable = null;
  }

  private subscription: Subscription | null = null;

  ngOnInit() {
    this.observable = new Observable(() => {
      setTimeout(() => {
        this.modal = true;
      }, 10000);
    });

    this.subscription = this.observable.subscribe();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  closeModal(){
    this.modal = false;
    this.subscription?.unsubscribe();
  }
}
