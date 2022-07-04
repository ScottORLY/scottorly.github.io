import './tufte.module.css'
import meta from './header'
import styles from './styles.module.css'

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
                    <Link href='https://apps.apple.com/us/developer/scott-orlyck/id1082162815'>App Store</Link> <br />
                    <Link href='https://github.com/scottorly'>GitHub</Link> <br />
                    <Link href='https://linkedin.com/in/scottorlyck'>LinkedIn</Link> <br />
                    <Link href='https://www.instagram.com/scottorlyck/'>Instagram</Link> <br />
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
                <Link href="https://montecarloxo.com">MONTE CARLO XO</Link>
            </h2>
            <p>
                AR Tic-tac-toe.
            </p>
            <h2>
                <Link href="https://tarotarcana.app">TAROT ARCANA</Link>
            </h2>
            <p>
                AR Divination Simulator.
            </p>
            <h2><Link href="https://coviz19.dev">COVIZ-19</Link></h2>
            <p>
                Animated choropleth visualization of US COVID-19 data from JHU.
            </p>
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
                <Link href="https://apps.apple.com/us/app/get-help-app/id1319554390">GET HELP</Link>
            </h2>
            <p />
            <h2>
                <Link href="https://appadvice.com/app/hallmark-shoebox/1210937098">HALLMARK SHOEBOX</Link>
            </h2>
            <p />
            <h2>
                <Link href="https://download.cnet.com/Hallmark-Digital-Postage/3000-2094_4-78463978.html">HALLMARK DIGITAL POSTAGE</Link>
            </h2>
            <p/>
            <h2>
                <Link href="https://vimeo.com/85466100">REALM BLAZER</Link>
            </h2>
        </section>   
        <div className='epigraph'>
            <p>
                <code>/dev/禅宗</code>
            </p>
            <blockquote>
                <p>
                    令威儀齊整，然後結跏趺坐。
                </p>
                <p>
                    <em>Command a solemn orderliness, then sit in the lotus posture.</em>
                </p>
            </blockquote>
        </div> 
    </article>
)
document.head.appendChild(meta)
document.head.appendChild( 
    <script async defer data-domain="scottorly.github.io" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(blog)
