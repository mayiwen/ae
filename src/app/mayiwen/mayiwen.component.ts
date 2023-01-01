import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MayiwenService } from './mayiwen.service';
@Component({
  selector: 'app-nav',
  templateUrl: './mayiwen.component.html',
  styleUrls: ['./mayiwen.component.less'],
  providers: []
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
