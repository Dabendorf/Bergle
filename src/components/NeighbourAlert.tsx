import React from 'react'
import { useSharedGameState } from '../shared/useGame';
import { countries } from '../domain/countries';

const NeighbourAlert = () => {
    const {
      state: { country, guesses },
    } = useSharedGameState();
 const neighboursCountries:string[] = countries.filter( it => country.neighbours.includes(it.code) ).map(it => it.name.toLowerCase())
 const lastguess:string  = guesses.length > 0 ? guesses[guesses.length - 1].name.toLowerCase() : ""
  return (
    <b>
        {neighboursCountries.includes(lastguess) ? "Nå jetta du naboområdet, tjommi." : ""}
    </b>
  )
}

export default NeighbourAlert