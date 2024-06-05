import ImgLogo from "../../assets/logo-recall.svg"

function Logo(props) {
    return (
        <img className={props.className} src={ImgLogo} alt="Logo Recall" />
    )
}

export default Logo