import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavSettingService } from './nav-setting.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav-setting.component.html',
  styleUrls: ['./nav-setting.component.less'],
  providers: [NavSettingService],
})
export class NavSettingComponent implements OnInit, AfterViewInit {

  selectTab = '1';
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
