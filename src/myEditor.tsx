import {useEffect, useState} from "react";
import {useQuill} from "react-quilljs";
import './myEditor.scss'
import 'quill/dist/quill.snow.css';


const MyEditor = () => {
    const [text, setText] = useState<any>()
    const [open, setOpen] = useState<any>()

    const {quill, quillRef} = useQuill();
    useEffect(() => {
        if (quill) {
            if (quill) {
                quill.on('text-change', (delta, oldDelta, source) => {
                    setText(quill.root.innerHTML)
                    //console.log("text", quill.getText()); // Get text only
                     console.log(quill.getContents()); // Get delta contents
                    //console.log(quill.root.innerHTML); // Get innerHTML using quill
                    //console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                });
            }
        }
    }, [quill]);
    console.log("delta", text)

    function createMarkup() {
        return {__html: text};
    }


    return (
        <>
            <div className="editor">
                <div ref={quillRef}/>
            </div>
            <button className="btn" onClick={() => setOpen(text)}> press</button>
            {open && <div dangerouslySetInnerHTML={createMarkup()}/>}
        </>

    )
}
export default MyEditor