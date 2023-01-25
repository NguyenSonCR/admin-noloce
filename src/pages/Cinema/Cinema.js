import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Cinema() {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                [{ direction: 'rtl' }], // text direction

                [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],

                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ font: [] }],
                [{ align: [] }],
                ['link', 'image'],

                ['clean'],
            ],
            handlers: {
                link: function (value) {
                    console.log('ok');
                },
            },
        },
    };

    return (
        <div>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
        </div>
    );
}

export default Cinema;
