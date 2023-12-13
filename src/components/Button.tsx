interface Props {
    name: string;
    btnclass: "link" | "github" | "download";
    icon: string;
    onclick: () => void;
}

function Button({ name, btnclass, icon, onclick }: Props) {
    return (
        <>
            <button className={btnclass} onClick={onclick}>{name}<img className="iconn" src={icon} alt="img" /></button>
        </>
    )
}

export default Button;