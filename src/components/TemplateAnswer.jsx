import React from 'react';

const TemplateAnswer = ({key ,content,questionStep,onChangeInput}) => {

    return (
        <>
            <label key={key}>
                <input type="radio" name={`question[${questionStep}]`}  onChange={onChangeInput}  value={content}/>
                {content}
            </label>
            </>
    )
};

export default  TemplateAnswer;