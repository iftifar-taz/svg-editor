import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SvgDimention } from "../models/svg-dimention.model";
import { DataStoreService } from "./data-store.service";

@Injectable({
  providedIn: 'root',
})

export class SvgDataService {
  private svgDataApi = environment.apiEndpoints.svgData;

  constructor(
    private http: HttpClient,
    private dataStoreService: DataStoreService) { }

  getSvgDimention(): Observable<any> {
    return this.http.get<SvgDimention>(`${this.svgDataApi}svg-data`).pipe(
      map(x => {
        this.dataStoreService.svgDimention$.next(x);
      })
    );
  }

  patchSvgDimention(svgDimention: SvgDimention): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.patch<any>(`${this.svgDataApi}svg-data`, svgDimention, options).pipe(
      map(x => {
        this.dataStoreService.svgDimention$.next(svgDimention);
      })
    );
  }
}