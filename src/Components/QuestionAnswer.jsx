import React from 'react'
import Answers from './Answers'
const QuestionAnswer = ({item, index}) => {
  return (
    <>
    <div className={item.type == 'q' ? 'flex justify-end' : ''} key={index + Math.random()}>
                    {
                      item.type === 'q' ?
                        <li key={index + Math.random()}
                          className='text-right border-8  dark:bg-zinc-700  dark:border-zinc-700 bg-red-100 border-red-100 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl w-fit mr-3'
                        ><Answers ans={item.text} idx={index} totalRes={1} type={item.type} /></li>

                        : item.text.map((ansItem, ansIndex) =>
                          <li key={ansIndex + Math.random()} className='text-left p-1'>
                            <Answers ans={ansItem} totalRes={item.length} type={item.type} />
                          </li>
                        )
                    }
                  </div>
    </>
  )
}

export default QuestionAnswer