import React, { useState } from 'react'
import ABButton from '../components/ABButton'
import WriteInput from '../components/writeInput'
import QuizForm from '../components/quizForm';

export default function AdminPanel() {
    const [quizType, setQuizType] = useState('');
    return (
        <>
            <div className='grid grid-cols-6 '>
                <div className='bg-gray-700 h-screen sideScreen '>
                    <div className='profilePic my-12 '>
                    </div>
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
                            <ABButton className=' w-60 ' label='Logout' />
                        </div>
                    </div>
                </div>
                <QuizForm quizType={quizType} />


            </div>
        </>
    )
}

// const QuizForm = (props: any) => {
//     const { quizType } = props;

//     const save = () => {

//     }

//     const addQuestion = () => {
//         const api = quizType === "HTML" ? 'questionsHTML' : quizType === "CSS" ? 'questionsCSS' : quizType === "HTML" ? 'questionsHTML' : ''
//         console.log(api)
//     }
//     return (<div className='col-span-5 p-12 bg-gray-300 h-screen'>
//         <div className='flex justify-between mx-8'>
//             <h1 className='text-3xl'>QUIZ App Admin Panel {quizType}</h1>
//             <ABButton label='Save' />
//         </div>
//         <div className='grid grid-cols-3 mt-5 input-box'>
//             <div className="mx-8 my-6 ">
//                 <WriteInput label='Quiz Name' />
//             </div>
//             <div className="mx-8 my-6 ">
//                 <WriteInput label='Quiz Duration Time' />
//             </div>
//             <div className="mx-8 my-6 ">
//                 <WriteInput label='Secret Key' />
//             </div>
//             <div className="mx-8 my-6 ">
//                 <WriteInput label='Quiz Open' />
//             </div>
//             <div className="mx-8 my-6 col-span-2">
//                 <WriteInput label='Description' />
//             </div>
//             <div className="mx-8 my-6 ">
//                 <ABButton label='Lock Quiz' />
//             </div>

//         </div>

//         <div className='input-box mx-8'>
//             <div className='my-4'>
//                 <WriteInput
//                 value={model.email}
//                 onChange={(e: any) => { fillModel("email", e.target.value) }} label='QUESTIONS' />


//             </div>
//             <div className='my-4 flex '>
//                 <WriteInput
//                  label='Options' />
//                 <div className='px-12 py-3 text-3xl'>
//                     <ABButton className='' label='+' />
//                 </div>

//             </div>
//         </div>

//         <div className='input-box mx-5 grid grid-cols-2'>
//             <div className='m-3'>
//                 <WriteInput label='Option 1' disabled={true} />
//             </div>
//             <div className='m-3'>
//                 <WriteInput label='Option 2' disabled={true} />
//             </div>
//             <div className='m-3'>
//                 <WriteInput label='Option 3' disabled={true} />
//             </div>
//             <div className='m-3'>
//                 <WriteInput label='Option 4' disabled={true} />
//             </div>

//         </div>

//         <div className='input-box w-80 m-auto my-6'>
//             <WriteInput label='Correct Answer' disabled={true} />
//             <div className='my-6 text-center'>
//                 <ABButton label='Add Question ' />
//             </div>
//         </div>
//     </div>)
// }
