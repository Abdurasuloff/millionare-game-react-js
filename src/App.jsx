import { useState, React, useMemo, useEffect } from 'react';
import './App.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia.jsx';
import Start from './components/Start';


function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Qachon O'zbekistonda gaz va elektr toki kamayadi?",
      answers: [
        {
          text: "Kuzda",
          correct: false,
        },
        {
          text: "Qishda",
          correct: true,
        },
        {
          text: "Yozda",
          correct: false,
        },
        {
          text: "Bahorda",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Odamlar nima deydi degan qo'shiqni kim aytgan?",
      answers: [
        {
          text: "Konsta",
          correct: true,
        },
        {
          text: "Shokir",
          correct: false,
        },
        {
          text: "Ozodbek Nazarbekov",
          correct: false,
        },
        {
          text: "Snoop Dog",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Instagramdagi eng ko'p obunachiga ega bo'lgan odam",
      answers: [
        {
          text: "Leo Messi",
          correct: false,
        },
        {
          text: "Selena Gomez",
          correct: false,
        },
        {
          text: "Cristiano Ronaldo",
          correct: true,
        },
        {
          text: "Daniel Alves",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Dunyodagi Eng Boy odam",
      answers: [
        {
          text: "Elon Musk",
          correct: true,
        },
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Uorn  Buffet",
          correct: false,
        },
        {
          text: "Jack Ma",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Boshqa savol yozgim kelmadi. Javoblardan biri  to'g'ri tanla HISOB!!",
      answers: [
        {
          text: "A javob",
          correct: false,
        },
        {
          text: "B javob",
          correct: false,
        },
        {
          text: "C javob",
          correct: true,
        },
        {
          text: "D javob",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Boshqa savol yozgim kelmadi. Javoblardan biri  to'g'ri tanla HISOB!!",
      answers: [
        {
          text: "A javob",
          correct: true,
        },
        {
          text: "B javob",
          correct: false,
        },
        {
          text: "C javob",
          correct: false,
        },
        {
          text: "D javob",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Boshqa savol yozgim kelmadi. Javoblardan biri  to'g'ri tanla HISOB!!",
      answers: [
        {
          text: "A javob",
          correct: false,
        },
        {
          text: "B javob",
          correct: false,
        },
        {
          text: "C javob",
          correct: false,
        },
        {
          text: "D javob",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Qoyil lekin",
      answers: [
        {
          text: "A javob",
          correct: false,
        },
        {
          text: "B javob",
          correct: false,
        },
        {
          text: "C javob",
          correct: true,
        },
        {
          text: "D javob",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
        <div className="main" >
          {stop ?(  <h1 className='endText' >You earned {earned}</h1>) : (
            <>
              <div className="top" >
              <div className="timer" ><Timer setStop={setStop} questionNumber={questionNumber } /></div>
            </div>
            <div className="bottom" >
              <Trivia data={data} 
                      setStop={setStop} 
                      setQuestionNumber={setQuestionNumber}
                      questionNumber={questionNumber} />
            </div>
            </>
          )}
          
        </div>
        <div className="pyramid" >
          <ul className="moneyList" >
            {moneyPyramid.map((m) => (
              <li className={questionNumber === m.id ? "moneyListItem active": "moneyListItem"} >
                  <span className="moneyListItemNumber" >{m.id}</span>
                  <span className="moneyListItemAmount" >{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </>)}  
    </div>
  )
}


export default App

