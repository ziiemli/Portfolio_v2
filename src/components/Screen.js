import React from 'react';

const Screen = ({title, img, projectName}) => {
    return (
        <div className='projectDevContent__screen'>
            <h3 className='projectDevContent__screen__title'>{title}</h3>
            <img className='projectDevContent__screen__img' src={img} alt={"Visual of " + projectName + ", " + title + " page"} loading="lazy"/>
        </div>
    );
};

export default Screen;