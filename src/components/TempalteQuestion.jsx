import React from 'react';
import TemplateAnswer from './TemplateAnswer';
import Button from './Buttons';
import PropTypes from 'prop-types';

const TemplateQuestion = ({content,onClickHandler,showNextButton,questionStep,onChangeInput,errors}) => {

    const {
        question,
        answers
    } = content;
    return (
        <>
            <h2>
                {question}
            </h2>
            <div className="answers">
                {
                    answers.map( (item, index) => (
                        <TemplateAnswer
                            key={index}
                            content={item?.content}
                            questionStep={questionStep}
                            onChangeInput={onChangeInput}
                        />
                    ))
                }
            </div>
            {
                showNextButton && (
                    <div className="buttons">
                        <Button  onClick={onClickHandler}
                                 className="btn btn-main"
                                 text="Next"
                        />
                    </div>
                )
            }
            <div className="errors">
                {errors}
            </div>

        </>
    )
};
TemplateQuestion.propTypes = {
    content: PropTypes.object,
    onClickHandler: PropTypes.func,
    showNextButton: PropTypes.bool,
    questionStep: PropTypes.number,
    onChangeInput: PropTypes.func,
    errors: PropTypes.string,
};
export default TemplateQuestion;