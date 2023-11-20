import { useState } from 'react'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import './App.css'

function App() {
  
    // Creates a new editor instance.
    const editor = useBlockNote({});
    editor.onEditorContentChange(e=>{
      console.log('on-block-change,--',e)
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
