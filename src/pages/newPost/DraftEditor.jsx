import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class DraftEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          localization={{
            locale: "ko",
          }}
          onEditorStateChange={this.onEditorStateChange}
        />
        <p>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</p>
      </div>
    );
  }
}

export default DraftEditor;
