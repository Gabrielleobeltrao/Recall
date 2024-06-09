import React, { useState } from 'react';
import HeaderHome from "../components/HeaderHome"
import Note from "../components/Note"
import FormNewNote from "../components/FormNewNote"
import BottonNewNote from "../components/ButtonNewNote"

function Home() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <HeaderHome />
            <div className="flex flex-wrap justify-around items-start px-4">
                <Note title="Lorem ipsum vehicula ullamcorper nibh elit per aliquet curae" text="Venenatis orci non primis cubilia adipiscing vel elit sapien, convallis adipiscing bibendum cursus rutrum quam proin ad pulvinar, ut tellus vivamus est amet tristique litora. taciti etiam interdum orci at porta nunc neque mattis, turpis justo nam cursus diam tortor lacinia, placerat eleifend justo aliquam curabitur dui neque." color="pink-purple"/>
                <Note title="Lorem ipsum inceptos ac curabitur id lacus aliquam est eros ullamcorper lacinia erat malesuada sociosqu vivamus" text="Interdum arcu sociosqu vehicula venenatis a nostra sapien, lorem facilisis integer dapibus vivamus neque sem morbi, suspendisse lectus cubilia feugiat lobortis ipsum." color="blue"/>
            </div>
            <section>
                <FormNewNote 
                    isVisible={isVisible} 
                    onClickVisibility={() => setIsVisible(false)}
                />
                <div className={`bg-black w-screen h-screen fixed top-0 left-0 z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}/>
            </section>
            <BottonNewNote 
                onClick={() => setIsVisible(true)}
            />
        </div>
    )
}

export default Home