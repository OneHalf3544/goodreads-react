import {useState} from "react";


const EditableText = ({text, onNewText}) => {
    const [inChange, setInChange] = useState(false)
    const [currentText, setCurrentText] = useState(text)

    const handleSpecialKeys = (e, text) => {
        switch(e.key) {
            case 'Enter':
                onNewText(currentText)
                setInChange(false)
                break
            case 'Escape':
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
            onKeyPress={e => handleSpecialKeys(e, currentText)}
        />
    } else {
        return <div data-for-test={testId} onDoubleClick={e => setInChange(true)}>{currentText}</div>
    }
}

export default EditableText