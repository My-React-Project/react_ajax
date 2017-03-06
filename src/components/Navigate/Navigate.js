import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigate.css'

const Navigate = ({onClick, postId, disabled}) => (
    <div className="navigate">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={
                () => onClick('PREV')
            }
            disabled={disabled}/>
        <div className="naviagate_page_num">
            {postId}
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="navigate-right-button"
            onClick={
                () => onClick('NEXT')
            }
            disabled={disabled}/>
    </div>
)

export default Navigate;
