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
                <h1 className="font-bold pb-12 pt-10 text-xl">Sua Memória Digital:<br />Notas Eficientes e Seguras</h1>
                <p className="pb-5 text-sm">Recall é um aplicativo web intuitivo e eficiente que permite aos usuários criar notas de forma rápida e segura. Ideal para quem precisa organizar suas ideias, tarefas ou qualquer tipo de informação importante o Recall proporciona uma experiência de usuário simples e direta, facilitando a gestão das suas notas diárias.</p>
                <img 
                    className="size-10/12 self-center" 
                    src={Iphone} 
                    alt="Iphone com a pagina da Recall aberta"
                />
            </section>
            <section className="flex flex-col mx-12">
                <h2 className="font-bold text-base text-base pt-14 pb-2 text-center">Funcionalidades</h2>
                <div className="flex flex-col w-full gap-5">
                    <p className="text-sm w-full pt-4">Criar notas no Recall é simples e rápido. Basta clicar no botão "Nova Nota", adicionar seu título, conteúdo e cor, e salvar. Suas notas são imediatamente armazenadas, acessíveis de qualquer dispositivo conectado</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={NewNote}
                            alt="#"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 pt-10">
                    <p className="text-sm w-full pt-4">Editar suas notas é fácil com o Recall. Basta selecionar a nota que deseja modificar, clicar no botão "Editar Nota", fazer as alterações necessárias. Suas mudanças são atualizadas instantaneamente.</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={EditNote}
                            alt="#"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 pt-10">
                    <p className="text-sm w-full pt-4">Deletar notas no Recall é direto. Simplesmente selecione a nota que deseja remover e clicar no botão "Deletar Nota". A nota será permanentemente apagada, mantendo seu espaço de trabalho organizado.</p>
                    <div className="w-full px-3">
                        <img 
                            className="h-auto rounded-xl"
                            src={DeletNote}
                            alt="#"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5 pt-10">
                    <p className="text-sm w-full pt-4">O Recall utiliza o login com Google para uma autenticação rápida e segura. Comece a usar o Recall sem complicações e com total segurança.</p>
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
                <h2 className="font-bold text-base pt-20 pb-6 text-center">Sobre o Recall</h2>
                <div className="flex gap-2.5 w-full text-white">
                    <div className="w-1/2">
                        <div className="px-2.5 pt-2.5 pb-12 relative bg-purple-blue rounded-xl">
                            <h3 className="font-bold pb-2.5 text-base">Nossa historia</h3>
                            <p className="text-sm">O Recall nasceu da necessidade de uma solução simples e eficiente para a organização de notas. Percebendo a dificuldade de gerenciar ideias, tarefas e informações importantes em várias plataformas, decidimos criar uma ferramenta que unisse praticidade e segurança. Com o uso das tecnologias, como React, Tailwind CSS, e Firebase, desenvolvemos o Recall para oferecer uma experiência de usuário intuitiva e eficaz.</p>
                            <img 
                                className="absolute right-0 bottom-0 w-10 h-10"
                                src={StyleNote}
                                alt="#"
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="px-2.5 pt-2.5 pb-12 relative bg-pink-purple rounded-xl">
                            <h3 className="font-bold pb-2.5 text-base">Oque nos queremos</h3>
                            <p className="text-sm">O objetivo do Recall é proporcionar aos usuários uma maneira fácil e segura de organizar suas notas e informações. Esperamos que o Recall ajude as pessoas a manterem suas ideias e tarefas bem organizadas, acessíveis em qualquer lugar e a qualquer momento, aumentando a produtividade e reduzindo a confusão do dia a dia. Queremos criar uma comunidade de usuários satisfeitos que confiem no Recall como sua principal ferramenta de organização pessoal.</p>
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
                    <Link to='/login'>Entrar</Link>
                    <Link to='/register'>Criar Conta</Link>
                    <Link to='/redefinepassword'>Recuperar Senha</Link>
                    <a className="pt-1" href="">
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