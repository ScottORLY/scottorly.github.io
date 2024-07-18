import { select } from 'd3-selection'
import { timeDay, timeHour, timeMinute } from 'd3-time'
import 'd3-transition'

const updateTime = () => {
    if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
        return
    }
    const la = new Date(new Date().toLocaleString('en-US', { timeZone: "America/Los_Angeles"}))
    select(`#la-hand-hours`).transition().attr('transform', `rotate(${(la - timeDay(la)) / 864e5 * 720})`)
    select(`#la-hand-minutes`).transition().attr('transform', `rotate(${(la - timeHour(la)) / 36e5 * 360})`)
    select(`#la-hand-seconds`).transition().attr('transform', `rotate(${(la - timeMinute(la)) / 6e4 * 360})`)

    const ny = new Date(new Date().toLocaleString('en-US', { timeZone: "America/New_York"}))
    select(`#ny-hand-hours`).transition().attr('transform', `rotate(${(ny - timeDay(ny)) / 864e5 * 720})`)
    select(`#ny-hand-minutes`).transition().attr('transform', `rotate(${(ny - timeHour(ny)) / 36e5 * 360})`)
    select(`#ny-hand-seconds`).transition().attr('transform', `rotate(${(ny - timeMinute(ny)) / 6e4 * 360})`)

    const paris = new Date(new Date().toLocaleString('en-US', { timeZone: "Europe/Paris"}))
    select(`#paris-hand-hours`).transition().attr('transform', `rotate(${(paris - timeDay(paris)) / 864e5 * 720})`)
    select(`#paris-hand-minutes`).transition().attr('transform', `rotate(${(paris - timeHour(paris)) / 36e5 * 360})`)
    select(`#paris-hand-seconds`).transition().attr('transform', `rotate(${(paris - timeMinute(paris)) / 6e4 * 360})`)

    const berlin = new Date(new Date().toLocaleString('en-US', { timeZone: "Europe/Berlin"}))
    select(`#berlin-hand-hours`).transition().attr('transform', `rotate(${(berlin - timeDay(berlin)) / 864e5 * 720})`)
    select(`#berlin-hand-minutes`).transition().attr('transform', `rotate(${(berlin - timeHour(berlin)) / 36e5 * 360})`)
    select(`#berlin-hand-seconds`).transition().attr('transform', `rotate(${(berlin - timeMinute(berlin)) / 6e4 * 360})`)

    const moscow = new Date(new Date().toLocaleString('en-US', { timeZone: "Europe/Moscow"}))
    select(`#moscow-hand-hours`).transition().attr('transform', `rotate(${(moscow - timeDay(moscow)) / 864e5 * 720})`)
    select(`#moscow-hand-minutes`).transition().attr('transform', `rotate(${(moscow - timeHour(moscow)) / 36e5 * 360})`)
    select(`#moscow-hand-seconds`).transition().attr('transform', `rotate(${(moscow - timeMinute(moscow)) / 6e4 * 360})`)

    const hk = new Date(new Date().toLocaleString('en-US', { timeZone: "Asia/Hong_Kong"}))
    select(`#hk-hand-hours`).transition().attr('transform', `rotate(${(hk - timeDay(hk)) / 864e5 * 720})`)
    select(`#hk-hand-minutes`).transition().attr('transform', `rotate(${(hk - timeHour(hk)) / 36e5 * 360})`)
    select(`#hk-hand-seconds`).transition().attr('transform', `rotate(${(hk - timeMinute(hk)) / 6e4 * 360})`)

    const tokyo = new Date(new Date().toLocaleString('en-US', { timeZone: "Asia/Tokyo"}))
    select(`#tokyo-hand-hours`).transition().attr('transform', `rotate(${(tokyo - timeDay(tokyo)) / 864e5 * 720})`)
    select(`#tokyo-hand-minutes`).transition().attr('transform', `rotate(${(tokyo - timeHour(tokyo)) / 36e5 * 360})`)
    select(`#tokyo-hand-seconds`).transition().attr('transform', `rotate(${(tokyo - timeMinute(tokyo)) / 6e4 * 360})`)
}

(() => setInterval(updateTime, 60))()

let visible = true
const onVisibilityChanged = (e) => {
    if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
        // The tab has lost focus
        // clearTimeout(myTimeout)
      } else {
        // The tab has gained focus
        // myTimeout = setTimeout(timeoutfunction, 1000)
      }
}
document.addEventListener("visibilitychange", onVisibilityChanged, false);
document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
document.addEventListener("msvisibilitychange", onVisibilityChanged, false);

