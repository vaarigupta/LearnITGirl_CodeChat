import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own 
import 'ace-builds/src-noconflict/mode-javascript';
// ui-theme package
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import {themes} from '../themes';
import {modes} from '../modes';

const THEME = 'ace/theme/monokai';
const LANG = 'ace/mode/javascript';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  themes =  themes;
  modes = modes;
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;

  constructor() { }

  ngOnInit () {
      const element = this.codeEditorElmRef.nativeElement;
      
      const editorOptions: Partial<ace.Ace.EditorOptions> = {
          highlightActiveLine: true,
          minLines: 50,
          maxLines: Infinity,
      };

      this.codeEditor = ace.edit(element, editorOptions);
      this.codeEditor.setTheme(THEME);
      this.codeEditor.getSession().setMode(LANG);
      this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
   }

}
