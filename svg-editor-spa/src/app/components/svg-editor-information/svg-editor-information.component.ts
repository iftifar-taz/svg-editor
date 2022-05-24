import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-svg-editor-information',
  templateUrl: './svg-editor-information.component.html',
  styleUrls: ['./svg-editor-information.component.css']
})

export class SvgEditorInformationComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  svgParimeter!: number;

  constructor(private dataStoreService: DataStoreService) {

  }

  ngOnInit(): void {
    this.setSvgParimeterSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  private setSvgParimeterSubscription(): void {
    const svgDimentionObserver = this.dataStoreService.svgDimention$.subscribe(x => {
      this.svgParimeter = 2 * (x.width + x.height);
    });
    this.subscriptions.push(svgDimentionObserver);
  }
}