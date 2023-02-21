import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { title } from 'process';
import {createEditor, createToolbar} from '@wangeditor/editor';
@Component({
  selector: 'app-wangeditor',
  templateUrl: './wangeditor.component.html',
  styleUrls: ['./wangeditor.component.less'],
  providers: [],
})
export class WangEditorComponent implements OnInit, AfterViewInit {
  @Input() id = '';
  private editor: any; // 绑定的文本内容
  constructor() {}
  ngAfterViewInit(): void {
    
    console.log('这是afterViewInit');
    console.log(this.id);
    const editorConfig = {
      placeholder: '请在这里输入内容',
      onchange(edit: any) {
        const html = edit.getHtml();
      }
    };
    const editor = createEditor({
      selector: `#${this.id}-editor-container`,
      html: `<p><br></p>`,
      config: editorConfig
    });

    const toolbar = createToolbar({
      editor,
      selector: `#${this.id}-toolbar-container`,
      mode: 'default'
    });
    this.editor = editor;
    console.log(this.editor)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getEditorHtml(): string {
    return this.editor.getHtml();
  }
  setEditorHtml(text: string) {
    this.editor.setHtml(text);
  }
}
