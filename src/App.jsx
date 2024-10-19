import { useState } from 'react'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote, getDefaultReactSlashMenuItems } from "@blocknote/react";
// import {HiOutlineGlobalAlt} from 'react-icons/hi';
import "@blocknote/core/style.css";
import './App.css'


const actionToExecute = (editor)=>{
  const currentElement = editor.getTextCursorPosition().block;

  const blockToInsert = {
    type:'paragraph',
    content:[
      {
        type:'text',
        text:'Hello world',
        styles:{
          bold: true
        }
      }
    ]
  }
  editor.insertBlocks([blockToInsert],currentElement,'after')
}

const slashMenuItem = {
  name:'Insert-me',
  execute: actionToExecute,
  alias:['hello','insert-me'],
  group:'Inteligencia artificial',
  icon:<i>A</i>,
  hint: 'Use this to inser custom bold item'

}
const slashMenuItems = [
  ...getDefaultReactSlashMenuItems(),
  slashMenuItem
]


function App() {

    // Creates a new editor instance.
    const editor = useBlockNote({
      slashMenuItems
    });

    const styles = editor.getActiveStyles();
    console.log('active-style',styles)
    editor.onEditorContentChange(e=>{
      const text = editor.getSelectedText();

      console.log('on-block-change,--',e)
      console.log('selected-text--',text)

      console.log('\n\n----editor-current---',editor.getTextCursorPosition().block)
      console.log('\n\n----editor-next---',editor.getTextCursorPosition().nextBlock)
      console.log('\n\n----editor-previous---',editor.getTextCursorPosition().prevBlock)
    })
    const onInserBlock = ()=>{
      editor.insertBlocks([
        {
          content:'something to test right here',
          type: 'heading'
        }
      ],editor.getTextCursorPosition().block,
      'after')
    }
    const onUpdateBlock = ()=>{

    }
    const onDeleteBlock = ()=>{

    }
  
  return (<div style={{
    width: '100%',
    background: '#fff'
  }}>
    <button onClick={onInserBlock}>inser block </button>
    <button onClick={onDeleteBlock}>delete block</button>
    <button onClick={onUpdateBlock}>update block</button>
    <BlockNoteView editor={editor} />
  </div>
  )
}

export default App
