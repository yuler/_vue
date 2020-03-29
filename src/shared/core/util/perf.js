import { inBrowser } from './env'

export let mark
export let measure

if (process.env.NODE_ENV !== 'production') {
  const pref = inBrowser && window.performance
  if (
    pref &&
    pref.mark &&
    pref.measure &&
    pref.clearMarks &&
    pref.clearMeasures
  ) {
    mark = tag => pref.mark(tag)
    measure = (name, startTag, endTag) => {
      pref.measure(name, startTag, endTag)
      pref.clearMarks(startTag)
      pref.clearMarks(endTag)
    }
  }
}
