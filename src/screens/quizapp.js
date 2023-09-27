import ABButton from '../components/ABButton';
import { useEffect, useState } from 'react';
import { fbLogOut, questionGet } from '../config/firebasemethod';

export default function QuizApp() {
    const [quizType, setQuizType] = useState('');
    const [model, setModel] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isDone, setIsDone] = useState(false);

    const getQuestion = () => {
        const api =
            quizType === 'HTML'
                ? questionGet('HTMLQuestions')
                    .then((res) => {
                        console.log(res);
                        setModel(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                : quizType === 'CSS'
                ? questionGet('CSSQuestions')
                    .then((res) => {
                        setModel(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                : quizType === 'JS QUIZ 1'
                ? questionGet('JS1Questions')
                    .then((res) => {
                        setModel(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                : quizType === 'JS QUIZ 2'
                ? questionGet('JS2Questions')
                    .then((res) => {
                        setModel(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                : null;
    };

    useEffect(() => {
        getQuestion();
    }, [quizType]);

    const nextQuestion = (answer) => {
        const questionNumber = currentQuestion + 1;
        checkAnswer(answer, currentQuestion);
        if (questionNumber < model.length) {
            setCurrentQuestion(questionNumber);
        } else {
            setIsDone(true);
        }
    };

    const checkAnswer = (answer, i) => {
        if (answer === model[i].correctAnswer) {
            setScore((prev) => prev + 1);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsDone(false);
    };

    const logOut = () => {
        fbLogOut()
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => err);
    };

    return (
        <>
            <div className='grid grid-cols-6 '>
                <div className='bg-gray-700 h-screen sideScreen '>
                    <div className='profilePic my-12 '></div>
                    <div className='my-12 '>
                        <div className='my-5'>
                            <ABButton className='w-60 ' label='HTML' onClick={() => setQuizType('HTML')} />
                        </div>
                        <div className='my-5'>
                            <ABButton className=' w-60 ' label='CSS' onClick={() => setQuizType('CSS')} />
                        </div>
                        <div className='my-5'>
                            <ABButton className=' w-60 ' label='JS QUIZ 1' onClick={() => setQuizType('JS QUIZ 1')} />
                        </div>
                        <div className='my-5'>
                            <ABButton className=' w-60 ' label='JS QUIZ 2' onClick={() => setQuizType('JS QUIZ 2')} />
                        </div>
                    </div>
                    <div className='my-12'>
                        <div className='my-4'>
                            <ABButton onClick={logOut} className=' w-60 ' label='Logout' />
                        </div>
                    </div>
                </div>

                {quizType === '' ? (
                    <>
                        <div className='sideScreen bg-gray-300 text-center col-span-5 h-screen'>
                            <div>
                                <p className='text-5xl p-4 font-bold'>Welcome to Quiz</p>
                                <p className='text-3xl p-4'>Click The Category to Start The Quiz</p>
                            </div>
                        </div>
                    </>
                ) : isDone ? (
                    <>
                        <div className='col-span-5 sideScreen p-12 bg-gray-300 h-screen text-center'>
                            <div className=' bg-white p-3 m-12 rounded-xl'>
                                <p className='text-3xl font-bold p-5'>Congratulations You did it!</p>
                                <p className='text-2xl p-5'>
                                    Your Score is : <span className='font-bold'>{score}</span>
                                </p>
                                <ABButton label='Restart Quiz' onClick={restartQuiz} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='col-span-5 p-12 bg-gray-300 h-screen text-center'>
                        <h1 className='text-center text-5xl font-bold p-5'>{`${quizType} QUIZ APP `}</h1>

                        <div className='bg-white p-3 m-12 rounded-xl'>
                            <div>
                                <p className='text-2xl p-5'>Question : {currentQuestion + 1}/{model.length}</p>
                            </div>
                            <div className='text-5xl p-5'>
                                <p>{model[currentQuestion]?.question}</p>
                            </div>
                            <div className='p-5'>Score : {score}</div>
                        </div>

                        <div className='grid grid-cols-2'>
                            {model &&
                                model[currentQuestion]?.options.map((x, i) => (
                                    <div key={i}>
                                        <div className='m-4'>
                                            <ABButton className='w-80' label={x} onClick={() => nextQuestion(x)} />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
