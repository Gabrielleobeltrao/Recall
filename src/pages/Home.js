import HeaderHome from "../components/HeaderHome"
import BottonNewNote from "../components/ButtonNewNote"
import Note from "../components/Note"

function Home() {
    return (
        <div>
            <HeaderHome />
            <div className="flex flex-wrap justify-around items-start px-4">
                <Note title="Lorem ipsum vehicula ullamcorper nibh elit per aliquet curae" text="Venenatis orci non primis cubilia adipiscing vel elit sapien, convallis adipiscing bibendum cursus rutrum quam proin ad pulvinar, ut tellus vivamus est amet tristique litora. taciti etiam interdum orci at porta nunc neque mattis, turpis justo nam cursus diam tortor lacinia, placerat eleifend justo aliquam curabitur dui neque." color="pink-purple"/>
                <Note title="Lorem ipsum inceptos ac curabitur id lacus aliquam est eros ullamcorper lacinia erat malesuada sociosqu vivamus" text="Interdum arcu sociosqu vehicula venenatis a nostra sapien, lorem facilisis integer dapibus vivamus neque sem morbi, suspendisse lectus cubilia feugiat lobortis ipsum." color="blue"/>
            </div>
            <BottonNewNote />
        </div>
    )
}

export default Home