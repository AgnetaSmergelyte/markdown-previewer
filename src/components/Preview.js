import React, {useState} from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Preview = ({editorValue, setDisplay}) => {
    const expandIcon = <FontAwesomeIcon icon={faExpandArrowsAlt} />
    const compressIcon = <FontAwesomeIcon icon={faCompressArrowsAlt} />
    const [myIcon, setMyIcon] = useState(expandIcon);
    const [expandPreview, setExpandPreview] = useState('');

    function togglePreview() {
        if (expandPreview === 'expanded') {
            setMyIcon(expandIcon);
            setExpandPreview('');
            setDisplay('both');
        } else {
            setMyIcon(compressIcon);
            setExpandPreview('expanded');
            setDisplay('preview');
        }
    }

    return (
        <div>
            <div className="toolbar">
                <b>Preview</b>
                <div onClick={togglePreview}>{myIcon}</div>
            </div>
            <div id="preview" className={expandPreview}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} >
                    {editorValue}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Preview;