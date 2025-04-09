import { useEffect } from "react";
import PropTypes from "prop-types";

export default function AboutMe({ setTitle }) {
    useEffect(() => {
        setTitle("About Me");
        document.title = "About Me - My Website";
    }, [setTitle]);

    return (
        <>
            Boring actually.
        </>
    )
}

AboutMe.propTypes = {
    setTitle: PropTypes.func.isRequired
};