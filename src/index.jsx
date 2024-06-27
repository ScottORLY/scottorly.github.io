import meta from './header'
import styles from './styles.module.css'
import { select } from 'd3-selection'
import { timeDay, timeHour, timeMinute } from 'd3-time'
import 'd3-transition'
import { range } from 'd3-array'

const updateTime = () => {
    const now = new Date()
    select(`#hand-hours`).transition().attr('transform', `rotate(${(now - timeDay(now)) / 864e5 * 720})`)
    select(`#hand-minutes`).transition().attr('transform', `rotate(${(now - timeHour(now)) / 36e5 * 360})`)
    select(`#hand-seconds`).transition().attr('transform', `rotate(${(now - timeMinute(now)) / 6e4 * 360})`)
}

const Clock = () => (<>
    <svg width="240" height="240" viewBox="50 50 500 500" style="max-width:100%;height:auto;">
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
            <g id="hand-hours">   
                <path id="hours-path" d="M-13,47h26l-3,-186h-17z" />
            </g>
            <g id="hand-minutes" >
                <path id='minutes-path' d="M-13,47h26l-3,-240h-17z" />
            </g>
            <g id="hand-seconds">
                <line y1="65" y2="-138" stroke="red" stroke-width="4" />
                <circle cy="-138" r="16" fill="red" />
                <circle r="7.5" fill="red" />
                <circle r="4.5" fill="none" stroke="brown" />
            </g>
        </g>
    </svg>
</>)

const Link = ({ children, attributes: { href }}) => (
    <a target='_blank' rel='noreferrer noopener' href={href}>
        {children}
     </a>
)

const LinkHere = ({ children, attributes: { href }}) => (
    <a href={href}>
        {children}
     </a>
)

const MarginNote = ({ children, attributes: { id } }) => (
    <>
        <label for={id} className="margin-toggle">&#8853;</label>
        <input type="checkbox" id={id} className="margin-toggle"/>
        <span className="marginnote">
            { children }
        </span>
    </>
)

const SideNote = ({ children, attributes: { id } }) => (
    <>
        <label for={id} className="margin-toggle sidenote-number"/>
        <input type="checkbox" id={id} className="margin-toggle"/>
        <span className="sidenote">
            { children }
        </span>
    </>
)

const blog = (
    <article>
        <section>
            <p>
                <MarginNote id='links'>  
                <Clock /> <br />
                    <Link href='https://apps.apple.com/us/developer/scott-orlyck/id1082162815'>App Store</Link> <br />
                    <Link href='https://github.com/scottorly'>GitHub</Link> <br />
                    <Link href='https://huggingface.co/scottto'>Hugging Face</Link> <br />
                    <Link href='https://linkedin.com/in/scottorlyck'>LinkedIn</Link> <br />
                    <Link href='https://www.instagram.com/scottorlyck/'>Instagram</Link> <br />
                    <Link href='https://bsky.app/profile/scottorly.github.io'>BlueSky</Link> <br />
                </MarginNote>   
                <h1 className={styles.title}>Scott Orlyck</h1>
            </p>        
        </section>

        <section>
            <p>
                <span className='newthought'>Some of the projects I have worked on.</span>
            </p>
           
        </section>

        <section>
            <p><code>/dev/apps</code></p>
            <h2>
                <Link href="https://apps.apple.com/us/app/micro-llm/id6468129438">MICRO LLM</Link>
            </h2>
            <p>
                Your personal, private, secure, on-device AI assistant.
            </p>
             <h2>
                <Link href="https://apps.apple.com/us/app/tarot-arcana/id1539747669?platform=iphone">TAROT RAVEN</Link>
            </h2>
            <p>
                Tarot card readings from state-of-the-art on-device artificial intelligence.
            </p>
            <h2>
                <Link href="https://montecarloxo.com">MONTE CARLO XO</Link>
            </h2>
            <p>
                AR Tic-tac-toe played against a monte carlo method AI.
            </p>
            <h2>
                <Link href="https://scottorly.github.io/coviz19">COVIZ-19</Link>
            </h2>
        </section>
        <section>
        <p><code>/dev/words</code></p>
            <h2>
                <LinkHere href="https://scottorly.github.io/taskmaster">TASKMASTER</LinkHere>
            </h2>
            <p>
                Swift Concurrency &amp; UIKit.
            </p>
            <h2>
                <LinkHere href="https://scottorly.github.io/drive2combine">DRIVE II: COMBINE</LinkHere>
            </h2>
            <p>
                Driving Combine.
            </p>
            <h2>
                <LinkHere href="https://scottorly.github.io/drive">DRIVE</LinkHere>
            </h2>
            <p>
                RxSwift UI Patterns.
            </p>
        </section>

        <section>
            <p><code>/dev/work</code></p>
            <h2>
                <Link href="https://apps.apple.com/us/app/figs/id1503374453?platform=iphone">FIGS&#174;</Link>
            </h2>
            <h2>
                <Link href="https://apps.apple.com/us/app/weber-connect/id1480540695?platform=iphone">WEBER CONNECT</Link>
            </h2>
            <h2>
                <Link href="https://appadvice.com/app/hallmark-shoebox/1210937098">HALLMARK SHOEBOX</Link>
            </h2>
            <h2>
                <Link href="https://download.cnet.com/Hallmark-Digital-Postage/3000-2094_4-78463978.html">HALLMARK DIGITAL POSTAGE</Link>
            </h2>
              <h2>
                <Link href="https://valarm.net">VALARM</Link>
            </h2>
            <h2>
                <Link href="https://vimeo.com/85466100">REALM BLAZER</Link>
            </h2>
        </section>   
    </article>
)
document.head.appendChild(meta)
document.head.appendChild( 
    <script async defer data-domain="scottorly.github.io" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(blog)
setInterval(updateTime, 60)
