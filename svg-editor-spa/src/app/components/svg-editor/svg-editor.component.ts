import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/common/constants';
import { SvgHelper } from 'src/app/helpers/svg.helper';
import { Dimention } from 'src/app/models/dimention.model';
import { SvgDimention } from 'src/app/models/svg-dimention.model';
import { DataStoreService } from 'src/app/services/data-store.service';
import { SvgDataService } from 'src/app/services/svg-data.service';

@Component({
  selector: 'app-svg-editor',
  templateUrl: './svg-editor.component.html',
  styleUrls: ['./svg-editor.component.css']
})

export class SvgEditorComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  svgCanvasDimention: Dimention = Constants.SVG_CANVAS_DIMENTION;
  svgDimention!: SvgDimention;
  isLoading!: boolean;

  constructor(
    private dataStoreService: DataStoreService,
    private svgDataService: SvgDataService) {

  }

  ngOnInit(): void {
    this.getSvgDimention();
    this.setSvgDimentionSubscription();
    this.setLoaderSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  onResizeEnd(event: ResizeEvent): void {
    let svgDimention = SvgHelper.updatedDimantion(this.svgDimention, event.edges);
    svgDimention = SvgHelper.correctAxisCrossDrag(svgDimention);
    svgDimention = SvgHelper.correctOutOfBounceDrag(svgDimention);
    this.patchSvgDimention();
  }

  private setSvgDimentionSubscription(): void {
    const svgDimentionObserver = this.dataStoreService.svgDimention$.subscribe(x => {
      this.svgDimention = x;
    });
    this.subscriptions.push(svgDimentionObserver);
  }

  private setLoaderSubscription(): void {
    const loaderObserver = this.dataStoreService.isLoading$.subscribe(x => {
      this.isLoading = x;
    });
    this.subscriptions.push(loaderObserver);
  }

  private getSvgDimention(): void {
    const svgDimentionGetter = this.svgDataService.getSvgDimention().subscribe(x => {
      console.log("done");
    });
    this.subscriptions.push(svgDimentionGetter);
  }

  private patchSvgDimention(): void {
    const svgDimentionPatcher = this.svgDataService.patchSvgDimention(this.svgDimention).subscribe(x => {
      console.log("done");
    });
    this.subscriptions.push(svgDimentionPatcher);
  }
}