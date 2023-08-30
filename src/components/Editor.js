import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const Editor = ({editorValue, setEditorValue, setDisplay}) => {
    const expandIcon = <FontAwesomeIcon icon={faExpandArrowsAlt} />
    const compressIcon = <FontAwesomeIcon icon={faCompressArrowsAlt} />
    const [myIcon, setMyIcon] = useState(expandIcon);
    const [expanded, setExpanded] = useState('');

    const editorRef = useRef();
    function updateValue() {
        setEditorValue(editorRef.current.value);
    }

    function toggleExpansion() {
        if (expanded === 'expanded') {
            setMyIcon(expandIcon);
            setExpanded('');
            setDisplay('both');
        } else {
            setMyIcon(compressIcon);
            setExpanded('expanded');
            setDisplay('editor');
        }
    }

    return (
        <div>
            <div className="toolbar">
                <b>Editor</b>
                <div onClick={toggleExpansion}>{myIcon}</div>
            </div>
            <textarea className={expanded} name="editor" id="editor" cols="90" rows="20" value={editorValue}
                      onChange={updateValue} ref={editorRef}></textarea>
        </div>
    );
};

export default Editor;