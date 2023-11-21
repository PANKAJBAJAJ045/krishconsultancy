import { Dropdown } from "bootstrap";
import { useEffect } from "react";

export const Header = () => {
    useEffect(() => {
        const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
        [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl));
    }, [])
    return (
        <>


        </>

    )
}
