import { Component, OnDestroy, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

interface IUser {
  id: number;
  typeUser: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  public transporteurs: IUser [] = [];
  public chargeurs: IUser[] = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UsersService) {
  }

  public ngOnInit(): void {

    this.userService.index()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: IUser[] ) => {
        console.log('response', res);

        this.transporteurs = res.filter((items)=> items.typeUser ==='transporteur');

        this.chargeurs = res.filter((items)=> items.typeUser ==='chargeur');

    });



  }
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
