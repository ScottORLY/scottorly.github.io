import { select } from 'd3-selection'
import { timeDay, timeHour, timeMinute } from 'd3-time'
import 'd3-transition'

const updateTime = () => {
    const now = new Date()
    select(`#hand-hours`).transition().attr('transform', `rotate(${(now - timeDay(now)) / 864e5 * 720})`)
    select(`#hand-minutes`).transition().attr('transform', `rotate(${(now - timeHour(now)) / 36e5 * 360})`)
    select(`#hand-seconds`).transition().attr('transform', `rotate(${(now - timeMinute(now)) / 6e4 * 360})`)
}

(() => setInterval(updateTime, 60))()