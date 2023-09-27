import { useState } from 'react'
import ABButton from "./ABButton"
import WriteInput from "./writeInput"
import { questionsAdd } from '../config/firebasemethod';


export default function QuizForm(props) {
    const { quizType } = props;
    const [model, setModel] = useState>({})
    const [optionsList, setOptionsList] = useState>([])
    const [correctanswer, setCorrectAnswer] = useState>

    const fillModel = (key,val) => {
        model[key] = val
        setModel({ ...model })

    }

    const addQuestion = () => {
        console.log(model)
        model.options = [...optionsList]
        const api = quizType === "HTML"
            ? questionsAdd('HTMLQuestions', model)
                .then(res => {
                    setModel({})
                    setOptionsList([])
                    setCorrectAnswer('')
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            : quizType === "CSS"
                ? questionsAdd('CSSQuestions', model)
                    .then(res => {
                        setModel({})
                        setOptionsList([])
                        setCorrectAnswer('')
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                : quizType === "JS QUIZ 1"
                    ? questionsAdd('JS1Questions', model)
                        .then(res => {
                            setModel({})
                            setOptionsList([])
                            setCorrectAnswer('')
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                    : quizType === "JS QUIZ 2"
                        ? questionsAdd('JS1Questions', model)
                            .then(res => {
                                setModel({})
                                setOptionsList([])
                                setCorrectAnswer('')
                                console.log(res)
                            }).catch(err => {
                                console.log(err)
                            })
                        : null
        console.log(api)
    }

    const addOption = () => {
        setOptionsList((prev:) => [...prev, model.options])
    }

    console.log(model)
    return <>
        <div className='col-span-5 p-12 bg-gray-300 h-screen'>
            <div className='flex justify-between mx-8'>
                <h1 className='text-3xl'>QUIZ App Admin Panel {quizType}</h1>
                <ABButton label='Save' />
            </div>
            <div className='grid grid-cols-3 mt-5 input-box'>
                <div className="mx-8 my-6 ">
                    <WriteInput label='Quiz Name' disabled={true} value={quizType} />
                </div>
                <div className="mx-8 my-6 ">
                    <WriteInput label='Quiz Duration Time' />
                </div>
                <div className="mx-8 my-6 ">
                    <WriteInput label='Secret Key' />
                </div>
                <div className="mx-8 my-6 ">
                    <WriteInput label='Quiz Open' />
                </div>
                <div className="mx-8 my-6 col-span-2">
                    <WriteInput label='Description' />
                </div>
                <div className="mx-8 my-6 ">
                    <ABButton label='Lock Quiz' />
                </div>

            </div>

            <div className='input-box mx-8'>
                <div className='my-4'>
                    <WriteInput
                        label='QUESTIONS'
                        value={model.question}
                        onChange={(e) => { fillModel("question", e.target.value) }}
                    />


                </div>
                <div className='my-4 flex '>
                    <WriteInput
                        label='Options'
                        value={model.options}
                        onChange={(e) => { fillModel("options", e.target.value) }}
                    />
                    <div className='px-12 py-3 text-3xl'>
                        <ABButton onClick={addOption} label='+' />
                    </div>

                </div>
            </div>

            <div>

                {optionsList && optionsList.map((x:, i:) => {
                    return (
                        <div key={i} className='input-box mx-5 grid grid-cols-2'>
                            <div className='m-3 flex'>
                                <WriteInput label='options' value={x} disabled={true}

                                />
                                <ABButton label='Add' onClick={() => {
                                    setCorrectAnswer(x)
                                    fillModel("correctAnswer", x)
                                }} />
                            </div>
                        </div>
                    )

                })}
            </div>


            <div className='input-box w-80 m-auto my-6'>
                <WriteInput label='Correct Answer' value={correctanswer} disabled={true} />
                <div className='my-6 text-center'>
                    <ABButton onClick={addQuestion} label='Add Question ' />
                </div>
            </div>
        </div>

    </>
}
