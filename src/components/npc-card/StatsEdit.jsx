import React from 'react'
import { statDisplay, stringTheBonus } from '../../lib/helper'
import './StatsEdit.css'

const raceStatsCleaner = raceStats => {
  const { str, dex, con, int, wis, cha } = raceStats

  return {
    rstr: str || 0,
    rdex: dex || 0,
    rcon: con || 0,
    rint: int || 0,
    rwis: wis || 0,
    rcha: cha || 0
  }
}

const denull = value => value || 0

const StatEditor = ({ stats, raceStats, updater }) => {
  const { str, dex, con, int, wis, cha } = stats
  const { rstr, rdex, rcon, rint, rwis, rcha } = raceStatsCleaner(raceStats)
  const totalStr = str + rstr
  const totalDex = dex + rdex
  const totalCon = con + rcon
  const totalInt = int + rint
  const totalWis = wis + rwis
  const totalCha = cha + rcha

  return (
    <div className='stat-editor'>
      <ul className='stats'>
        <li><span>Stat</span><span className='racial-stat-title'>Racial</span></li>
        <li><span>STR</span><input name='str' value={ denull(str) } maxLength={2} onChange={ updater } /><span>{ stringTheBonus(raceStats.str) }</span> = <span>{statDisplay(totalStr)}</span></li>
        <li><span>DEX</span><input name='dex' value={ denull(dex) } maxLength={2} onChange={ updater } /><span>{ stringTheBonus(raceStats.dex) }</span> = <span>{statDisplay(totalDex)}</span></li>
        <li><span>CON</span><input name='con' value={ denull(con) } maxLength={2} onChange={ updater } /><span>{ stringTheBonus(raceStats.con) }</span> = <span>{statDisplay(totalCon)}</span></li>
        <li><span>INT</span><input name='int' value={ denull(int) } maxLength={2} onChange={ updater } /><span>{ stringTheBonus(raceStats.int) }</span> = <span>{statDisplay(totalInt)}</span></li>
        <li><span>WIS</span><input name='wis' value={ denull(wis) } maxLength={2} onChange={ updater } /><span>{ stringTheBonus(raceStats.wis) }</span> = <span>{statDisplay(totalWis)}</span></li>
        <li><span>CHA</span><input name='cha' value={ denull(cha) } maxLength={2} onChange={ updater } /><span>{ stringTheBonus(raceStats.cha) }</span> = <span>{statDisplay(totalCha)}</span></li>
      </ul>
    </div>
  )
}

export default StatEditor
