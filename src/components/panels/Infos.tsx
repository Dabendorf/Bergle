import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React, { useState } from "react";
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
			<p className="mb-2 text-gray-500 dark:text-gray-400">Bergle er et spill basert på <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">Bergle</a>. Målet er å gjette det korrekte området i Bergen ved bruk av dine fantastiske geografikunnskap om Nordens mest relevante by.</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-1">
			<button onClick={() => seta(a === 1 ? -1 : 1)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
			<span>Hvordan spiller man spillet?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-1" className={a===1 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-2">
			<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
			<div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
          <div>
         Gjett riktig området på seks forsøk. Hver gjetning må være et område i Bergen kommune.</div>
          <div>
            Etter hver gjetning får du vite hvor langt unna du er og hvilken retning det korrekte stedet ligger relativ til den du har gjetta. I tillegg får du en prosentandel som sier hvor nærme du er relativ til størrelsen av Nordens viktigste metropol Bergen. Et lavt tall nær 0% tilsier at du er på feil side av Bergen. Et tall nær 100% betyr at det ikke er langt igjen til riktig området. Områdets plassering er det beregnede midtpunktet for dette området. Områder som har en felles grense kan derfor muligens vise store avstand.
          </div>
        </div>
        <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
          <div className="font-bold">Eksempel</div>
          <div>
            <Guesses
				rowCount={1}
				guesses={[
					{
						name: "Trengereid",
						direction: "SW",
						distance: 16800,
					},
				]} settingsData={settingsData} />
            <div className="my-2">
              Din første gjetning <span className="uppercase font-bold">Trengereid</span> er 
              16.80km unna riktig sted, det riktige området ligger sørvestover. Forresten er Trengereid ikke nødvendigvis geografisk bra plassert for å være første gjett.
            </div>
          </div>
          <div>
            <Guesses
				rowCount={1}
				guesses={[
					{
						name: "Fantoft",
						direction: "N",
						distance: 5960,
					},
				]} settingsData={settingsData} />
            <div className="my-2">
              Din andre gjetning <span className="uppercase font-bold">Fantoft</span> er nærmere og 
              5.96km unna riktig sted. Det riktige området ligger vestover.
            </div>
          </div>
          <div>
            <Guesses
				rowCount={1}
				guesses={[
					{
						name: "Vågsbunnen",
						direction: "NW",
						distance: 430,
					},
				]} settingsData={settingsData} />
            <div className="my-2">
              Din tredje gjetning, <span className="uppercase font-bold">Vågsbunnen</span> er kun 0.43km fra det korrekte svaret. Kanskje er det et annet sted med fremtidig Bybane du leter etter.
            </div>
          </div>
		  <div>
            <Guesses
				rowCount={1}
				guesses={[
					{
						name: "Bryggen",
						direction: "N",
						distance: 0,
					},
				]} settingsData={settingsData} />
            <div className="my-2">
              Din fjerde gjetning, <span className="uppercase font-bold">Bryggen</span>,
              er riktig. Gratulerer! 🎉
            </div>
          </div>
        </div>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-2">
			<button onClick={() => seta(a === 2 ? -1 : 2)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hvordan måles distansen?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-2" className={a===2 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Distansen er den euklidske distanse mellom de to midtpunktene av to områder. Den beregnes ikke fra grensen av områdene. Man får dermed kun 0km som distanse dersom man finner det korrekte svaret.</p>
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
			<p className="mb-2 text-gray-500 dark:text-gray-400">Kartet finnes <a href="https://commons.wikimedia.org/wiki/File:Boligomr%C3%A5der_Bergen.png" className="text-blue-600 dark:text-blue-500 hover:underline">her</a>.</p>
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
			<span>Hvor finner jeg flere lignende, ekstremt fine spill?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-6" className={a===6 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://www.nytimes.com/games/wordle/index.html" className="text-blue-600 dark:text-blue-500 hover:underline">Wordle:</a> Original spillekonseptet</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://worldle.teuteuf.fr/" className="text-blue-600 dark:text-blue-500 hover:underline">Worldle:</a> Gjettespill med land over hele kloden</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://oec.world/en/tradle/" className="text-blue-600 dark:text-blue-500 hover:underline">Tradle:</a> Basert på Worldle, men med informasjon over eksport</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://kommundle.no/" className="text-blue-600 dark:text-blue-500 hover:underline">Kommundle:</a> Gjettespill med norske kommuner</p>
			</div>
		</div>

		<h2 id="accordion-collapse-heading-7">
			<button onClick={() => seta(a === 7 ? -1 : 7)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
			<span>Hvilke folk skal jeg takke for spillet / skjefte til?</span>
			<svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
				<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
			</svg>
			</button>
		</h2>
		<div id="accordion-collapse-body-7" className={a===7 ? "" : "hidden"} style={{backgroundColor: backgroundColour}} aria-labelledby="accordion-collapse-heading-3">
			<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
			<p className="mb-2 text-gray-500 dark:text-gray-400">Det er på tid å takke til:</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://www.powerlanguage.co.uk/" className="text-blue-600 dark:text-blue-500 hover:underline">Josh Wardle</a>, den originale oppfinneren av Wordle</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://github.com/teuteuf" className="text-blue-600 dark:text-blue-500 hover:underline">@teuteuf</a>, han som lagte Worldle og &quot;donerte&quot; store dele av kildekoden til denne siden</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://oyvindsolheim.com/code" className="text-blue-600 dark:text-blue-500 hover:underline">Øyvind Solheim</a> og Sandra Bruce som har lagt Kommundle</p>
			<p className="mb-2 text-gray-500 dark:text-gray-400"><a href="https://github.com/Dabendorf/" className="text-blue-600 dark:text-blue-500 hover:underline">Lukas</a>, meg som stjal programkoden fra Worldle, konseptet fra Wordle, oversettelsen fra Kommundle og brukte uforsvarlig mange timer for å tegne bergenske boligstrøk i et merkelig program for geografer</p>
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
