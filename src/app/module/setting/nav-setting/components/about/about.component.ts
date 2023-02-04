import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../../../core/services';
const packageJson = require('../../../../../../../package.json');

@Component({
  selector: 'app-setting-abuot',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
/**
 * 这是一个帮助的页面
 */
export class AboutComponent implements OnInit {
  version = '';
  constructor(
    private cdr: ChangeDetectorRef,
    private electron: ElectronService,
    ) {
  }
  ngOnInit(): void {
    this.version =  packageJson.version.replaceAll('"', '');
    // throw new Error('Method not implemented.');
  }
  /** 跳转页面 */
  toMayiwen(e = 'http://mayiwen.com') {
    this.electron.shell.openExternal(e);
  }
}
