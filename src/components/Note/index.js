import StyleNote from "../../assets/StyleNote.svg"

function Note(props) {
    return (
        <div 
            className={`
                min-w-52 max-w-52 h-auto relative rounded-lg pb-7 pt-4 px-2.5 m-2 text-white row-span-1
                ${props.color === 'pink' ? 'bg-pink' : ''}
                ${props.color === 'pink-purple' ? 'bg-pink-purple' : ''}
                ${props.color === 'purple-blue' ? 'bg-purple-blue' : ''}
                ${props.color === 'blue' ? 'bg-blue' : ''}
            `}
        >
            <div className="flex flex-col gap-1.5">
                <h3 className="font-bold tracking-wide text-base break-all">{props.title}</h3>
                <h4 className="text-sm break-all">{props.text}</h4>
            </div>
            <img className="absolute bottom-0 right-0" src={StyleNote} alt="#"/>
        </div>
    )
}

export default Note