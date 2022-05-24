import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SvgDimention } from '../models/svg-dimention.model';

@Injectable({
  providedIn: 'root',
})

export class DataStoreService {
  isLoading$ = new BehaviorSubject<boolean>(false);
  svgDimention$ = new BehaviorSubject<SvgDimention>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
}