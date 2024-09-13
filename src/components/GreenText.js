import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GreenText = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // Current index of text
    const [subText, setSubText] = useState(''); // Current substring of the text being typed/erased
    const [isDeleting, setIsDeleting] = useState(false); // Track whether we're typing or deleting
    const [speed, setSpeed] = useState(200); // Speed of typing/deleting
    const pauseBetween = 1000; // Pause between deleting and typing the next text

    useEffect(() => {
        let typingTimeout;

        if (!isDeleting && subText.length < texts[currentTextIndex].length) {
            typingTimeout = setTimeout(() => {
                setSubText(texts[currentTextIndex].slice(0, subText.length + 1));
                setSpeed(200);
            }, speed);
        }

        else if (isDeleting && subText.length > 0) {
            typingTimeout = setTimeout(() => {
                setSubText(texts[currentTextIndex].slice(0, subText.length - 1));
                setSpeed(100); // Faster deleting speed
            }, speed);

        }

        else if (!isDeleting && subText.length === texts[currentTextIndex].length) {
            typingTimeout = setTimeout(() => setIsDeleting(true), pauseBetween);
        }

        else if (isDeleting && subText.length === 0) {
            setIsDeleting(false);
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop over texts
        }

        return () => clearTimeout(typingTimeout);
    }, [subText, isDeleting, currentTextIndex, texts, speed]);

    return (
        <h1
            className="fontCourier"
            style={{ color: "#1DB954", whiteSpace: "nowrap", overflow: "hidden", borderRight: ".15em solid white" }}
        >
            {subText}
        </h1>
    );
};

GreenText.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};
