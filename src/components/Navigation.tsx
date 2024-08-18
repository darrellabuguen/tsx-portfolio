import { useEffect, useState } from "react";

interface Props {
    page: string[];
    page_class: string;
}


const Navigation = ({ page, page_class }: Props) => {
    const [astate, setAnimationState] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", () => {
            var inwidth = window.innerWidth;
            if (inwidth > 1024) {
                setAnimationState(false);
                document.querySelector(".mblink-container")?.classList.add("re-animate");
                document.querySelector(".mblink-container")?.classList.remove("animate");
            }
        });
    });
    return (
        <>
            <nav className="nav-tag">
                <ul>
                    <li className="index-link mb"><a href="./index.html">My Portfolio</a></li>
                    <li className="mobile-menu mb"
                        onClick={() => {
                            if (astate) {
                                setAnimationState(false);
                                document.querySelector(".mblink-container")?.classList.add("re-animate");
                                document.querySelector(".mblink-container")?.classList.remove("animate");
                            }
                            else {
                                setAnimationState(true)
                                document.querySelector(".mblink-container")?.classList.add("animate");
                                document.querySelector(".mblink-container")?.classList.remove("re-animate");
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="#ffffff" />
                        </svg>
                    </li>
                    <div className={"link-container"}>
                        {page.map((page) =>
                            <li key={page}
                                className={
                                    page_class
                                }
                            >
                                <a href={`#${page}`}
                                    key={page}
                                >
                                    {page}
                                </a>
                            </li>
                        )}
                    </div>
                </ul>
            </nav>
            <div className={"mblink-container"}>
                {page.map((page) =>
                    <li key={page}
                        className={
                            page_class
                        }
                    >
                        <a href={`#${page}`}
                            key={page}
                        >
                            {page}
                        </a>
                    </li>
                )}
            </div>
        </>
    )
}

export default Navigation;