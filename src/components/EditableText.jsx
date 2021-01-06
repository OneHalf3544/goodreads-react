import {useState} from "react";


const EditableText = ({text, onNewText}) => {
    const [inChange, setInChange] = useState(false)
    const [currentText, setCurrentText] = useState(text)

    const handleSpecialKeys = (e) => {
        console.log(e, e.key)
        switch(e.key) {
            case 'Enter':
                onNewText(currentText)
                setInChange(false)
                break
            case 'Escape':
            case 'Esc': // IE/Edge specific value
                setCurrentText(text)
                setInChange(false)
                break
            default:
                break
        }
    }

    const testId = "editable-text"

    if (inChange) {
        return <input
            data-for-test={testId}
            type="text"
            value={currentText}
            onChange={e => setCurrentText(e.target.value)}
            onKeyDown={e => handleSpecialKeys(e)}
        />
    } else {
        return <div data-for-test={testId} onDoubleClick={e => setInChange(true)}>{currentText}</div>
    }
}

export default EditableText