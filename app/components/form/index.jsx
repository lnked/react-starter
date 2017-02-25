// import css from './styles.scss';
import React from 'react';

function Form ({ onSubmit, expanded = false, children }) {
    return (
        <form style={ expanded ? { height: 'auto' } : { height: 0 } } onSubmit={onSubmit}>
            {children}
            <button>Expand</button>
        </form>
    );
}

Form.propTypes = {
    children: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    expanded: React.PropTypes.bool
};

export default Form;
