import { Panel } from "./Panel";
import React, { useState } from "react";
import { useSettings } from "../../hooks/useSettings";
import { CustomLink, FAQitem, FAQitemAnswerline } from "./partials/FAQitem";
import { GuessRow } from "../GuessRow";
import { GuessRowWrapper } from "../GuessRowWrapper";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
}

export function Infos({ isOpen, close }: InfosProps) {
  const [openedIndex, setOpenedIndex] = useState(0);
  const [settingsData] = useSettings();

  const handleItemClick = (index: number) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };

  return (
    <Panel title="Ofte stilte spørsmål" isOpen={isOpen} close={close}>
      <div id="accordion-collapse" data-accordion="collapse">
        <FAQitem
          index={0}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Ka e' Bergle?"}
          answer={
            <FAQitemAnswerline
              text={
                <>
                  Bergle er et spill basert på{" "}
                  <CustomLink href="https://worldle.teuteuf.fr/">
                    Worldle
                  </CustomLink>
                  . Målet er å gjette det korrekte området i Bergen ved bruk av
                  dine fantastiske geografikunnskap om Nordens mest relevante
                  by.
                </>
              }
            />
          }
        />

        <FAQitem
          index={1}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Kordan spiller man spillet?"}
          answer={
            <>
              <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
                <div>
                  Gjett riktig området på seks forsøk. Hver gjetning må være et
                  område i Bergen kommune.
                </div>
                <div>
                  Etter hver gjetning får du vite kor langt unna du er og
                  hvilken retning det korrekte stedet ligger relativ til den du
                  har gjettet. I tillegg får du en prosentandel som sier kor
                  nærme du er relativ til størrelsen av Nordens viktigste
                  metropol Bergen. Et lavt tall nær 0% tilsier at du er på feil
                  side av Bergen. Et tall nær 100% betyr at det ikkje er langt
                  igjen til riktig området. Områdets plassering er det beregnede
                  midtpunktet for dette området. Områder som har en felles
                  grense kan derfor muligens vise store avstand.
                </div>
              </div>
              <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
                <div className="font-bold">Eksempel</div>
                <div>
                <GuessRowWrapper>
                  <GuessRow
                    key={"guess-example-2"}
                    guess={{
                      name: "Trengereid",
                      direction: "SW",
                      distance: 16800,
                      bydelIsCorrect: false,
                    }} 
                    settingsData={settingsData}
                  />
                </GuessRowWrapper>

                  <div className="my-2">
                    Din første gjetning{" "}
                    <span className="uppercase font-bold">Trengereid</span> er
                    16.80km unna riktig sted, det riktige området ligger
                    sørvestover. Forresten er Trengereid ikkje nødvendigvis
                    geografisk bra plassert for å være første gjett.
                  </div>
                </div>
                <div>
                <GuessRowWrapper>
                  <GuessRow
                    key={"guess-example-2"}
                    guess={{
                      name: "Fantoft",
                      direction: "N",
                      distance: 5960,
                      bydelIsCorrect: false,
                    }}
                    settingsData={settingsData}
                  />
                  </GuessRowWrapper>
                  <div className="my-2">
                    Din andre gjetning{" "}
                    <span className="uppercase font-bold">Fantoft</span> er
                    nærmere og 5.96km unna riktig sted. Det riktige området
                    ligger nordover.
                  </div>
                </div>
                <div>
                <GuessRowWrapper>
                  <GuessRow
                    key={"guess-example-3"}
                    guess={{
                      name: "Vågsbunnen",
                      direction: "NW",
                      distance: 430,
                      bydelIsCorrect: true,
                    }}
                    settingsData={settingsData}
                  />
                  </GuessRowWrapper>
                  <div className="my-2">
                    Din tredje gjetning,{" "}
                    <span className="uppercase font-bold">Vågsbunnen</span> er
                    kun 0.43km fra det korrekte svaret. Kanskje er det et annet
                    sted med fremtidig Bybane du leter etter.
                  </div>
                </div>
                <div>
                <GuessRowWrapper>
                  <GuessRow
                    key={"guess-example-4"}
                    guess={{
                      name: "Bryggen",
                      direction: "N",
                      distance: 0,
                      bydelIsCorrect: true,
                    }}
                    settingsData={settingsData}
                  />
                  </GuessRowWrapper>
                  <div className="my-2">
                    Din fjerde gjetning,{" "}
                    <span className="uppercase font-bold">Bryggen</span>, er
                    riktig. Gratulerer! 🎉
                  </div>
                </div>
              </div>
            </>
          }
        />
        <FAQitem
          index={2}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Kordan måles distansen?"}
          answer={
            <FAQitemAnswerline
              text={
                "Distansen er den euklidske distansen mellom to områdets midtpunkter. Den beregnes ikkje fra grensen til områdene. Man får derfor kun 0km som distanse dersom man finner det korrekte svaret."
              }
            />
          }
        />

        <FAQitem
          index={3}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Ka e' et område?"}
          answer={
            <>
              <FAQitemAnswerline
                text={
                  "Et område er et sammenhengende areal i kommunen som har et navn som er kjent for den vanlige bergenseren."
                }
              />
              <FAQitemAnswerline
                text={
                  "Eksempler er Damsgård, Flesland, Fantoft eller Bryggen (der Bybanen går)."
                }
              />
            </>
          }
        />

        <FAQitem
          index={4}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Kor kommer din data fra?"}
          answer={
            <>
              <FAQitemAnswerline
                text={
                  "Siden bergensere ikkje er enige i ting, så finnes det ikkje en offisiell definisjon over kordan byen burde inndeles på nivået under bydelene."
                }
              />
              <FAQitemAnswerline
                text={
                  "Dataen her stammer derfor fra et fantastisk kart på Wikipedia, der en annen person tegnet inn det han kalte for boligstrøk. Disse strøkene er også vilkårlige, men er hermed definert som den eneste rene sannheten."
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    Kartet finnes{" "}
                    <CustomLink href="https://commons.wikimedia.org/wiki/File:Boligomr%C3%A5der_Bergen.png">
                      her
                    </CustomLink>
                    .
                  </>
                }
              />
            </>
          }
        />
        <FAQitem
          index={5}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Eg e' uenig i dette, ka skal eg gjøre?"}
          answer={
            <FAQitemAnswerline
              text={
                "Gråte, klage, diskutere, belite deg. Bruke tid på bybanediskusjoner."
              }
            />
          }
        />
        <FAQitem
          index={6}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Kor finner eg flere lignende, ekstremt fine spill?"}
          answer={
            <>
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://www.nytimes.com/games/wordle/index.html">
                      Wordle:
                    </CustomLink>{" "}
                    Original spillekonseptet
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://worldle.teuteuf.fr/">
                      Worldle:
                    </CustomLink>{" "}
                    Gjettespill med land over hele kloden
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://oec.world/en/tradle/">
                      Tradle:
                    </CustomLink>{" "}
                    Basert på Worldle, men med informasjon over eksport
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://kommundle.no/">
                      Kommundle:
                    </CustomLink>{" "}
                    Gjettespill med norske kommuner
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://oslole.bergle.no/">
                      Oslole:
                    </CustomLink>{" "}
                    Gjett en kommune som er bedre enn Oslo
                  </>
                }
              />
            </>
          }
        />
        <FAQitem
          index={7}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Hvilke folk skal eg takke for spillet / skjefte til?"}
          answer={
            <>
              <FAQitemAnswerline text={"Det er på tid å takke til:"} />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://www.powerlanguage.co.uk/">
                      Josh Wardle
                    </CustomLink>
                    , den originale oppfinneren av Wordle
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://github.com/teuteuf">
                      @teuteuf
                    </CustomLink>
                    , han som lagte Worldle og &quot;donerte&quot; store dele av
                    kildekoden til denne siden
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://oyvindsolheim.com/code">
                      Øyvind Solheim
                    </CustomLink>{" "}
                    og Sandra Bruce som har lagt Kommundle
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://github.com/Dabendorf/">
                      Lukas
                    </CustomLink>
                    , meg som stjal programkoden fra Worldle, konseptet fra
                    Wordle, oversettelsen fra Kommundle og brukte uforsvarlig
                    mange timer for å tegne bergenske boligstrøk i et merkelig
                    program for geografer
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://github.com/AalyTokombaev">
                      Alexander
                    </CustomLink>
                    , for å implementere nettverk feature, og gjøre nettsiden
                    noe penere.
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://github.com/EirikBergesen">
                      Eirik
                    </CustomLink>
                    , for styling av nettverk feature.
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    <CustomLink href="https://github.com/pmo022">
                      Patrick Monslaup
                    </CustomLink>
                    , for forenkling, opprydning og speedup av koden.
                  </>
                }
              />
            </>
          }
        />
        <FAQitem
          index={8}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Finnes det en versjon for Oslo?"}
          answer={
            <>
              <FAQitemAnswerline
                text={
                  <>
                    Ja, den finnes{" "}
                    <CustomLink href="https://oslole.bergle.no/">
                      her
                    </CustomLink>
                    . Vi kan også forestille oss å lage versjoner for like
                    relevante steder som Utne, Båtsfjord eller Hardangervidda.
                    Galtvort, Mordor eller Blåfjell kommer sikkert snart ut
                    også.
                  </>
                }
              />
              <FAQitemAnswerline
                text={
                  "Et spill der man kan gjette alle to millioner foreslåtte Bybanetraséer har for tiden også høy prioritet."
                }
              />
            </>
          }
        />

        <FAQitem
          index={9}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Eg hater designet av nettsiden, ka skal eg gjøre?"}
          answer={
            <>
              <FAQitemAnswerline
                text={
                  "Eg også. Allerede fargekombinasjonen til denne siden, bruh. Foreslå meg bedre alternativer, takk."
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    Du må gjerne lage en PullRequest med endringsforslag på{" "}
                    <CustomLink href="https://github.com/Dabendorf/Bergle">
                      GitHub
                    </CustomLink>
                    .
                  </>
                }
              />
            </>
          }
        />
        <FAQitem
          index={10}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Kan eg bidra med flere funksjoner og endringsforslag?"}
          answer={
            <>
              <FAQitemAnswerline
                text={
                  "Du er hjertelig velkommen å komme med gode innspill, forbedre ting og lage nye funksjoner."
                }
              />
              <FAQitemAnswerline
                text={
                  <>
                    Koden er tilgjengelig på{" "}
                    <CustomLink href="https://github.com/Dabendorf/Bergle">
                      GitHub
                    </CustomLink>
                    .
                  </>
                }
              />
            </>
          }
        />
        <FAQitem
          index={11}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Kvordan kan eg ta kontakt?"}
          answer={
            <FAQitemAnswerline
              text={
                <>
                  Send en epost til{" "}
                  <CustomLink href="mailto:bergle@privatevoid.eu">
                    bergle[at]privatevoid.eu
                  </CustomLink>
                </>
              }
            />
          }
        />
        <FAQitem
          index={12}
          openedIndex={openedIndex}
          setOpenedIndex={handleItemClick}
          question={"Est-ce qu'il y a aussi une traduction française?"}
          answer={<FAQitemAnswerline text={"Non."} />}
          last={true}
        />
      </div>
    </Panel>
  );
}
