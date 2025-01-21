import meta from './header'
import styles from './styles.module.css'
import Clock from './clock'
import createMap from './map/index'

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

const blog = (<>
        <div id="worldClock">
            <Clock />
            <svg viewBox="0 0 620 420" id='mapContainer'>
                <g id='map'/>
                <g id='graticules'/>
            </svg>
        </div>
    <article>
        <section>
            <p>
                <MarginNote id='links'>  
                    <Link href='https://apps.apple.com/us/developer/scott-orlyck/id1082162815'>App Store</Link> <br />
                    <Link href='https://github.com/scottorly'>GitHub</Link> <br />
                    <Link href='https://huggingface.co/scottto'>Hugging Face</Link> <br />
                    <Link href='https://linkedin.com/in/scottorlyck'>LinkedIn</Link> <br />
                    <Link href='https://pixelfed.social/i/web/profile/784852805075567581'>pixelfed</Link>
                </MarginNote>   
                <h1 className={styles.title}>Scott Orlyck </h1>
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
    </>
)
document.head.appendChild(meta)
document.head.appendChild( 
    <script async defer data-domain="scottorly.github.io" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(blog)
createMap()
