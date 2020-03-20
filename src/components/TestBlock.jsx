import React, { useEffect, useState} from 'react';
import MainLayout from './layouts/Main';
import Questions from './api/Questions';
import Final from './api/Final';
import TemplateQuestion from './TempalteQuestion';

const TestBlock = () => {

    const [errors, SetErrors] = useState('');
    const [answers, SetAnswers] = useState([]);
    const [questionStep, SetQuestionStep] = useState(0);
    const [currentQuestion, SetCurrentQuestion] = useState('');
    const [showNextButton, SetShowNextButton] = useState(true);

    /*
    * Check for empty current step fields is empty
     */
    const checkCurrentFieldsByEmpty =(questionStep) =>{

        if(answers[questionStep]?.length === 0){
            SetErrors('Значение не выбрано');
        }
    };

    /*
    * Events by click button Next
     */
    const onClickHandler = (e) => {
        checkCurrentFieldsByEmpty(questionStep);

        if(errors.length ===0){
            SetQuestionStep(questionStep + 1);
        }

    };

    /*
    *  Get values from inputs
    */
    const onChangeInput = (e) => {
        SetAnswers({
            ...answers,
            [e.target.name]: e.target.value
        });
    };

    useEffect(
        () => {

            let lengthQuestions = Questions.length;
            console.log(answers);
            if (lengthQuestions === questionStep) {
                SetCurrentQuestion(Final[0]);
                SetShowNextButton(false);
                console.log(answers);
            } else {
                SetCurrentQuestion(Questions[questionStep]);
            }
        }, [questionStep]
    );
    if (!currentQuestion) return <p>loading ...</p>;

    return <MainLayout
        titleSection="title"
        sectionContent="section "
    >
            <TemplateQuestion
                content={currentQuestion}
                onClickHandler={onClickHandler}
                showNextButton={showNextButton}
                questionStep={questionStep}
                onChangeInput={onChangeInput}

            />
    </MainLayout>


};

export default TestBlock;