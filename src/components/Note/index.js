import StyleNote from "../../assets/StyleNote.svg"

function Note(props) {
    return (
        <div
            className={`
                w-full h-auto relative rounded-lg pt-4 px-2.5 text-white row-span-1
                ${props.color === 'pink' ? 'bg-pink' : ''}
                ${props.color === 'pink-purple' ? 'bg-pink-purple' : ''}
                ${props.color === 'purple-blue' ? 'bg-purple-blue' : ''}
                ${props.color === 'blue' ? 'bg-blue' : ''}
            `}
        >
            <div className="flex flex-col max-h-40 overflow-y-auto pr-5 pb-7 gap-1.5">
                <h3 className="font-bold tracking-wide text-base break-words whitespace-pre-line">{props.title}</h3>
                <h4 className="text-sm break-words whitespace-pre-line">{props.text}</h4>
            </div>
            <img className="absolute bottom-0 right-0" src={StyleNote} alt="#"/>
        </div>
    )
}

export default Note