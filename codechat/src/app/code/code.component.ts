import { Component, OnInit,Input, ViewChild, ElementRef  } from '@angular/core';
import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own 
import 'ace-builds/src-noconflict/mode-javascript';
// ui-theme package
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
import {themes} from '../themes';
import {modes} from '../modes';


const INIT_CONTENT = '';
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
  
  private codeEditor: ace.Ace.Editor;
  private editorBeautify;
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  @Input() content: string;
  constructor() { }

  ngOnInit () {
    ace.require('ace/ext/language_tools');
      const element = this.codeEditorElmRef.nativeElement;
      const editorOptions = this.getEditorOptions();
      this.codeEditor = this.createCodeEditor(element, editorOptions);
        this.setContent(this.content || INIT_CONTENT);
        // hold reference to beautify extension
      this.editorBeautify = ace.require('ace/ext/beautify');
      
   }

   private createCodeEditor(element: Element, options: any): ace.Ace.Editor {
    const editor = ace.edit(element, options);
    editor.setTheme(THEME);
    editor.getSession().setMode(LANG);
    editor.setShowFoldWidgets(true);
    return editor;
}


   private getEditorOptions() : Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean;}{
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 50,
      maxLines: Infinity,
   };
   const extraEditorOptions = { enableBasicAutocompletion: true };
        return Object.assign(basicEditorOptions, extraEditorOptions);
};

public getContent() {
  if (this.codeEditor) {
      const code = this.codeEditor.getValue();
      return code;
  }
}

public setContent(content: string): void {
  if (this.codeEditor) {
      this.codeEditor.setValue(content);
  }
}


public beautifyContent()
   {
     if( this.codeEditor && this.editorBeautify)
     {
       const session = this.codeEditor.getSession();
       this.editorBeautify.beautify(session);
     }
   }


   public OnContentChange(callback: (content: string, delta: ace.Ace.Delta) => void): void {
    this.codeEditor.on('change', (delta) => {
        const content = this.codeEditor.getValue();
        callback(content, delta);
    });
}


}

