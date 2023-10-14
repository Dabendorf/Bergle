import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React, { useState } from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";


interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
	const [a, seta]=useState(0);
	const backgroundColour = "#33405C";
  return (
    <Panel title="Ofte stilte spørsmål" isOpen={isOpen} close={close}>

	<div id="accordion-collapse" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-0">
			<button onClick={() => seta(a === 0 ? -1 : 0)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
			<span>Ka e&apos; Bergle?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-0" className={a===0 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-1">
			<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900" style={{backgroundColor: backgroundColour}}>
			<p className="mb-2 text-gray-500 dark:text-gray-400">Bergle er et spill basert på <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">Worldle</a>. Målet er å gjette det korrekte området i Bergen ved bruk av dine fantastiske geografikunnskap om Nordens mest relevante by.</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-1">
			<button onClick={() => seta(a === 1 ? -1 : 1)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
			<span>Hvordan spiller man spillet? TODO</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-1" className={a===1 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-2">
			<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">TODO</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-2">
			<button onClick={() => seta(a === 2 ? -1 : 2)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hvordan måles distansen? TODO</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-2" className={a===2 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Text</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-3">
			<button onClick={() => seta(a === 3 ? -1 : 3)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hva er et område?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-3" className={a===3 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Et område er et sammenhengende areal i kommunen som har et navn som er kjent for den vanlige bergenseren.</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400">Eksempler er Damsgård, Flesland, Fantoft eller Bryggen (der Bybanen går).</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-4">
			<button onClick={() => seta(a === 4 ? -1 : 4)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hvor kommer din data fra?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-4" className={a===4 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Siden bergensere ikke er enige i ting, så finnes det ikke en offisiell definisjon over hvordan byen burde inndeles på nivået under bydelene.</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400">Dataen her stammer derfra fra et fantastisk kart på Wikipedia, der en annen person tegnet inn det han kalte for boligstrøk. Disse strøkene er også vilkårlige, men er hermed definert som den eneste rene sannheten.</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-5">
			<button onClick={() => seta(a === 5 ? -1 : 5)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Jeg er uenig i dette, hva skal jeg gjøre?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-5" className={a===5 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Gråte, klage, diskutere, belite deg. Bruke tid på bybanediskusjoner.</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-6">
			<button onClick={() => seta(a === 6 ? -1 : 6)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hvor finner jeg flere lignende, ekstremt fine spill? TODO</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-6" className={a===6 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Text</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-7">
			<button onClick={() => seta(a === 7 ? -1 : 7)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hvilke folk skal jeg takke for spillet / skjefte til? TODO</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-7" className={a===7 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Text</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-8">
			<button onClick={() => seta(a === 8 ? -1 : 8)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Er det planlagt en versjon for Oslo?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-8" className={a===8 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
				<p className="mb-2 text-gray-500 dark:text-gray-400">Nei. Men vi kan forestille oss å lage en versjon for relevantere steder som Utne, Båtsfjord, Hardangervidda eller Dabendorf. Galtvort, Mordor eller Blåfjell kommer <i>sikkert</i> snart ut også.</p>
				<p className="mb-2 text-gray-500 dark:text-gray-400">Et spill der man kan gjette alle to millioner foreslåtte Bybanetraséer har for tiden også høyere prioritet.</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-9">
			<button onClick={() => seta(a === 9 ? -1 : 9)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Jeg hater designet av nettsiden, hva skal jeg gjøre?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-9" className={a===9 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
				<p className="mb-2 text-gray-500 dark:text-gray-400">Jeg også. Allerede fargekombinasjonen av denne siden, bruh. Foreslå meg bedre alternativer, takk.</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-10">
			<button onClick={() => seta(a === 10 ? -1 : 10)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Est-ce qu&apos;il y a aussi une traduction française?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-10" className={a===10 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
				<p className="mb-2 text-gray-500 dark:text-gray-400">Non.</p>
			</div>
		</div>
	</div>
      
    </Panel>
  );
}
