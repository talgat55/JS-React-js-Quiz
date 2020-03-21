import React from 'react';
import PropTypes from 'prop-types';
const TemplateAnswer = ({key ,content,questionStep,onChangeInput}) => {

    return (
        <>
            <label key={key}>
                <input
                    key={key}
                    type="radio"
                    name={`question[${questionStep}]`}
                    onChange={onChangeInput}
                    value={content}/>
                {content}
            </label>
            </>
    )
};
TemplateAnswer.propTypes = {
    key: PropTypes.number,
    content: PropTypes.string,
    questionStep: PropTypes.number,
    onChangeInput: PropTypes.func,
};
export default  TemplateAnswer;