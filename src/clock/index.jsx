import { range } from 'd3-array'

const locations = [
    "la",
    "ny",
    "london",
    "paris",
    "moscow",
    "hk",
    "tokyo"
]

const Clock = () => (
     <div className='clocks'>
       
        {
            locations.map(location =>
                <div className='clock'>
                    <svg viewBox="50 50 500 500" style="max-width:100%;height:auto;">
                     
                        <g transform="translate(300,300)">
                            <circle id="face" r="225" stroke-width="20" fill="none" stroke="lightgray"/>
                                {
                                    range(12).map(i => 
                                        <g id="tick-major" transform={`rotate(${i * 30})`}>
                                            <line y1="-203" y2="-153" stroke-width="14" />
                                        </g>
                                    )
                                }
                                { 
                                    range(60).map(i => i % 5 ? (
                                        <g id="tick-minor" transform={`rotate(${i * 6})`}>
                                            <line y1="-203" y2="-188" stroke-width="4" />
                                        </g>) : (<></>)
                                    )
                                }
                            <g id={`${location}-hand-hours`}>   
                                <path id="hours-path" d="M-13,47h26l-3,-186h-17z" />
                            </g>
                            <g id={`${location}-hand-minutes`} >
                                <path id='minutes-path' d="M-13,47h26l-3,-240h-17z" />
                            </g>
                            <g id={`${location}-hand-seconds`}>
                                <line y1="65" y2="-138" stroke="red" stroke-width="4" />
                                <circle cy="-138" r="16" fill="red" />
                                <circle r="7.5" fill="red" />
                                <circle r="4.5" fill="none" stroke="brown" />
                            </g>
                        </g>
                    </svg>

                    <h4>{`${location}`}</h4>
                </div>
                )
        }
    </div>
)

export default Clock