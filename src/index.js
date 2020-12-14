const ESC = "\x1b"
const Reset = `${ESC}[0m`
const Df = `${ESC}[`
const Bold = `${ESC}[1;`
const Ul = `${ESC}[4;`
const Blink = `${ESC}[5;`

const FgBlack = "30m"
const FgRed = "31m"
const FgGreen = "32m"
const FgYellow = "33m"
const FgBlue = "34m"
const FgMagenta = "35m"
const FgCyan = "36m"
const FgWhite = "37m"

const Black =`${Df}${FgBlack}`
const Red =`${Df}${FgRed}`
const Green =`${Df}${FgGreen}`
const Yellow =`${Df}${FgYellow}`
const Blue =`${Df}${FgBlue}`
const Magenta =`${Df}${FgMagenta}`
const Cyan =`${Df}${FgCyan}`
const White =`${Df}${FgWhite}`

const BgBlack = "40m"
const BgRed = "41m"
const BgGreen = "42m"
const BgYellow = "43m"
const BgBlue = "44m"
const BgMagenta = "45m"
const BgCyan = "46m"
const BgWhite = "47m"

const styledLog = (m, c) => console.log(`${c}%s${Reset}`, m)
const styledWrap = (m,c) => `${c}m${Reset}`

const replogger = () => 
{
  const defaults = {
    info: Green,
    note: Cyan,
    warn: Yellow,
    error: Red,
    hl: `${Df}${BgYellow}`
  }
  const styles ={
    bold: Bold,
    ul: Ul,
    blink: Blink
  }
  const colors = {
    black: Black,
    white: White,
    red: Red,
    yellow: Yellow,
    green: Green,
    blue: Blue,
    magenta: Magenta,
    cyan: Cyan
  }
  const bgs = {
    black: BgBlack,
    white: BgWhite,
    red: BgRed,
    yellow: BgYellow,
    green: BgGreen,
    blue: BgBlue,
    magenta: BgMagenta,
    cyan: BgCyan
  }
  const util = {
    esc: ESC,
    reset: Reset,
    default: Df
  }
  return {
    log: m => console.log(m),
    info: (m, c = defaults.info) => styledLog(m,c),
    note: (m, c = defaults.note) => styledLog(m,c),
    error: (m, c = defaults.error) => styledLog(m,c),
    hl: (m, c = defaults.hl) => styledLog(m,c),
    wrap: (m, c = defaults.hl) => styledWrap(m,c),
    getDefaults: () => defaults,
    setDefaults: c => Object.assign(defaults, c),
    styles,
    colors,
    bgs,
    util
  }
}

// Tests: Uncoment to run
/*
const l = log()
l.info('Hi, I am an info log')
l.info('I am an info log with custom color1', Red)
// To use styles, Fg or Bg colors need to be declared
l.info('I am info with magenta background', `${Df}${BgMagenta}`)
l.info('I am bold green info', `${Bold}${FgGreen}`)
l.info('I am yellow info that blinks', `${Blink}${FgYellow}`)
l.info('I am underlined cyan info', `${Ul}${FgCyan}`)

l.info(JSON.stringify(l.getDefaults()))
l.setDefaults({info: Magenta})
l.info('My default has been changed to magenta')
l.info(JSON.stringify(l.getDefaults()))
*/

export default replogger