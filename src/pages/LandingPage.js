import HeaderLandingPage from "../components/HeaderLandingPage"
import Iphone from "../assets/iphone-recall.jpg"
import NewNote from "../assets/NewNote.jpg"
import EditNote from "../assets/EditNote.jpg"
import DeletNote from "../assets/DeletNote.jpg"
import Google from "../assets/Gogle.jpg"
import Instagram from "../assets/insta-white.svg"
import StyleNote from "../assets/StyleNote.svg"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div>
            <HeaderLandingPage />
            <section className="flex flex-col atems-center text-center mx-12 h-full pt-16">
                <h1 className="font-bold pb-12 pt-10 text-xl">Your Digital Memory:<br />Efficient and Secure Notes</h1>
                <p className="pb-5 text-sm">Recall is an intuitive and efficient web application that allows users to create notes quickly and securely. Ideal for those who need to organize their ideas, tasks or any type of important information, Recall provides a simple and direct user experience, making it easier to manage your daily notes.</p>
                <img 
                    className="size-10/12 self-center" 
                    src={Iphone} 
                    alt="Iphone com a pagina da Recall aberta"
                />
            </section>
            <section className="flex flex-col mx-12">
                <h2 className="font-bold text-base text-base pt-14 pb-2 text-center">Functionalities</h2>
                <div className="flex flex-col w-full gap-5">
                    <p className="text-sm w-full pt-4">Creating notes in Recall is simple and fast. Just click the "New Note" button, add your title, content and color, and save. Your notes are immediately stored, accessible from any connected device</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={NewNote}
                            alt="#"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 pt-10">
                    <p className="text-sm w-full pt-4">Editing your notes is easy with Recall. Just select the note you want to modify, click the "Edit Note" button, make the necessary changes. Your changes are updated instantly.</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={EditNote}
                            alt="#"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 pt-10">
                    <p className="text-sm w-full pt-4">Deleting notes in Recall is straightforward. Simply select the note you want to remove and click the "Delete Note" button. The note will be permanently deleted, keeping your workspace organized.</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={DeletNote}
                            alt="#"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 pt-10">
                    <p className="text-sm w-full pt-4">Recall uses Google login for fast and secure authentication. Start using Recall without complications and in complete safety.</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={Google}
                            alt="#"
                        />
                    </div>
                </div>
            </section>
            <section className="mx-2.5 text-center">
                <h2 className="font-bold text-base pt-20 pb-6 text-center">About Recall</h2>
                <div className="flex gap-2.5 w-full text-white">
                    <div className="w-1/2">
                        <div className="px-2.5 pt-2.5 pb-12 relative bg-purple-blue rounded-xl">
                            <h3 className="font-bold pb-2.5 text-base">Our story</h3>
                            <p className="text-sm">Recall was born out of the need for a simple and efficient solution for organizing notes. Realizing the difficulty of managing ideas, tasks and important information across multiple platforms, we decided to create a tool that combined practicality and security. Using technologies such as React, Tailwind CSS, and Firebase, we developed Recall to offer an intuitive and effective user experience.</p>
                            <img 
                                className="absolute right-0 bottom-0 w-10 h-10"
                                src={StyleNote}
                                alt="#"
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="px-2.5 pt-2.5 pb-12 relative bg-pink-purple rounded-xl">
                            <h3 className="font-bold pb-2.5 text-base">What do we want</h3>
                            <p className="text-sm">Recall's goal is to provide users with an easy and secure way to organize their notes and information. We hope Recall will help people keep their ideas and tasks well organized, accessible anywhere, anytime, increasing productivity and reducing everyday clutter. We want to create a community of happy users who trust Recall as their primary personal organization tool.</p>
                            <img 
                                className="absolute right-0 bottom-0 w-10 h-10"
                                src={StyleNote}
                                alt="#"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-2.5 py-2.5 bg-pink rounded-xl text-white text-sm font-bold">
                <div className="flex flex-col gap-2 px-7 pt-3">
                    <Link to='/login'>Enter</Link>
                    <Link to='/register'>Create an account</Link>
                    <Link to='/redefinepassword'>Recover Password</Link>
                    <a className="pt-1" href="#">
                        <img 
                            className="w-7 h-7"
                            src={Instagram}
                            alt="Instagram Recall"
                        />
                    </a>
                </div>
                <div className="flex relative h-14">
                    <h3 className="pr-14 text-center self-end w-full">Copyright © 2024 OnePlataforma</h3>
                    <img 
                        className="absolute right-0 -bottom-2.5 w-10 h-10"
                        src={StyleNote} 
                        alt="#" 
                    />
                </div>
            </section>
        </div>
    )
}

export default LandingPage