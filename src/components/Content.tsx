import { ReactNode } from "react";

interface Props {
    clsname: string;
    background: "bg-primary" | "bg-secondary" | "bg-success" | "bg-danger" | "bg-warning" | "bg-info" | "bg-light" | "bg-dark" | "bg-body" | "bg-white";
    children: ReactNode;
    sub: string;
}

const Content = ({ clsname, background, children, sub }: Props) => {
    return (
        <>
            <div className={clsname + " " + background + sub}>{children}</div>
        </>
    )
}

export default Content;