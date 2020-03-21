import React, { Component,useEffect, useState} from 'react';
import MainLayout from './layouts/Main';
import Questions from './api/Questions';
import Final from './api/Final';
import TemplateQuestion from './TempalteQuestion';

class TestBlock  extends  Component {
    state  = {
        errors: '',
        answers: '',
        questionStep: 0,
        currentQuestion: '',
        showNextButton: true
    };

    /*
    * Check for empty current step fields is empty
     */
    checkCurrentFieldsByEmpty = (questionStep) =>{
        let res;

        if(this.state.answers[questionStep] !== "undefined" && this.state.answers[questionStep] != null){
            this.setState({
                errors: ''
            });
            res = true;
        }else{
            this.setState({
                errors: 'Значение не выбрано'
            });
            res = false;
        }

        return  res;
    };

    /*
    * Events by click button Next
     */
    onClickHandler = (e) => {

        const checkErr = this.checkCurrentFieldsByEmpty(this.state.questionStep);


        if(checkErr){

            this.setState( (state, props) => {
                return {
                    questionStep: state.questionStep +1,
                }
            });
        }
    };

    /*
    *  Get values from inputs
    */
    onChangeInput = (e) => {

        this.setState({
            answers: [...this.state.answers,  e.target.value ],
        })

    };
    componentDidMount(){
        this.setState( (state, props) => {
            return {
                currentQuestion: Questions[state.questionStep]
            }
        });


    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.questionStep !== this.state.questionStep) {
            let lengthQuestions = Questions.length;
            let variantCondition;
            if (lengthQuestions === this.state.questionStep) {
                variantCondition = false;
            } else {
                variantCondition = true

            }


            this.setState( (state, props) => {
                return {
                    currentQuestion:  variantCondition ===true  ? Questions[state.questionStep] : Final[0],
                    showNextButton:  variantCondition === false ?  false :  true
                }
            });
        }
    }



    render() {
    const {
        currentQuestion,
        showNextButton,
        questionStep,
        errors

    } = this.state;

        if (!currentQuestion) return <p>loading ...</p>;

        return (<MainLayout
            titleSection="title"
            sectionContent="section "
        >
            <TemplateQuestion
                content={currentQuestion}
                onClickHandler={this.onClickHandler}
                showNextButton={showNextButton}
                questionStep={questionStep}
                onChangeInput={this.onChangeInput}
                errors={errors}

            />
        </MainLayout>)
    };


};

export default TestBlock;