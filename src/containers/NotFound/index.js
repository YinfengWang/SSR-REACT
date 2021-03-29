import React from 'react';

const NotFound = (props) => {
    props.staticContext && (props.staticContext.NOT_FOUND = true);
    return (
        <div> 404，Sorry  page not found ！</div>
    );
}

export default NotFound;