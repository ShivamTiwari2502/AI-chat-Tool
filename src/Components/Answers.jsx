import React, { useState } from 'react'
import { useEffect } from 'react';
import { checkHeading, replaceHeadingStarts } from '../Helper';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Answers = ({ ans, idx, totalRes, type }) => {
    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans);

    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true);
            setAnswer(replaceHeadingStarts(ans))

        }
        // console.log(ans, checkHeading(ans));
    }, [])

    const renderer = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={dark}
                    PreTag='div' />
            ) :
                (<code {...props} className={className} >
                    {children}
                </code>)
        }
    }

    return (
        <div>
            {
                idx === 0 && totalRes > 1 ?
                    <span className='text-xl block dark:text-white text-zinc-800'> {answer} <br /> 
                    </span>
                     : heading ? <span className='pt-4 text-lg dark:text-white text-zinc-800'> {answer} <br /></span>
                        : <span className={type == 'q' ? 'pl-1' : null}>
                            <ReactMarkdown components={renderer}>
                                {answer}
                            </ReactMarkdown>
                        </span>
            }


        </div>
    )
}

export default Answers