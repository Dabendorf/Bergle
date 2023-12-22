import React, { ReactNode } from "react";

interface FAQitemProps {
    index: number
    openedIndex: number
    question: string;
    answer: ReactNode;
    setOpenedIndex: (index: number) => void
}

export function FAQitem({index,openedIndex,question,answer,setOpenedIndex}:FAQitemProps) {
    const backgroundColour = "#21295C";
    
    return (
        <>
        <h2 id="accordion-collapse-heading">
			<button onClick={() => setOpenedIndex(index === openedIndex ? -1 : index)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
			<span>{question}</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
        {openedIndex === index && <div id="accordion-collapse-body" style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading">
			<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900" style={{backgroundColor: backgroundColour}}>
			    {answer}
			</div>
		</div>}
		
        </>
    )
}

export function FAQitemAnswerline({ text }: { text: React.ReactNode }) {
    return <p className="mb-2 text-gray-500 dark:text-gray-400">{text}</p>
}

export function CustomLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
      <a href={href} className={"text-blue-600 dark:text-blue-500 hover:underline"} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }