import React from 'react';
import TemplateAnswer from './TemplateAnswer';
import Button from './Buttons';
const TemplateQuestion = ({content,onClickHandler,showNextButton,questionStep,onChangeInput}) => {

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

        </>
    )
};
export default TemplateQuestion;