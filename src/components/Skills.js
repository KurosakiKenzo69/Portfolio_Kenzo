import React from "react";
import PropTypes from "prop-types";

const Skills = ({ title, description, image }) => {
    return (
        <div className="card">
            <img src={ image } alt="" className={'img-card'}/>
            <h1> {title} </h1>
            <p> {description} </p>
        </div>
    );
}

Skills.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Skills;