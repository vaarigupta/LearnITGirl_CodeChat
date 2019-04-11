import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own 
import 'ace-builds/src-noconflict/mode-javascript';
// ui-theme package
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
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
  private editorBeautify;
  constructor() { }

  ngOnInit () {
    ace.require('ace/ext/language_tools');
      const element = this.codeEditorElmRef.nativeElement;
      const editorOptions = this.getEditorOptions();
      this.editorBeautify = ace.require('ace/ext/beautify');
      this.codeEditor = ace.edit(element, editorOptions);
      this.codeEditor.setTheme(THEME);
      this.codeEditor.getSession().setMode(LANG);
      this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
      
   }

   public beautifyContent()
   {
     if( this.codeEditor && this.editorBeautify)
     {
       const session = this.codeEditor.getSession();
       this.editorBeautify.beautify(session);
     }
   }

   private getCode() {
    const code = this.codeEditor.getValue();
    console.log(code);
        }
   private getEditorOptions() : Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean;}{
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 50,
      maxLines: Infinity,
   };
   const extraEditorOptions = {
    enableBasicAutocompletion: true
};
const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
        return margedOptions;
   };
}
