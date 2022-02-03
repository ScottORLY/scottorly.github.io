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
                <span className='newthought'>Some of the projects</span> I have built or helped build.
            </p>
        </section>

        <section>
        <p><code>/dev/apps</code></p>
            <h2>
                    <Link href="https://montecarloxo.com">MONTE CARLO XO</Link>
            </h2>
            <p>
                
                {/* <MarginNote id='monte'>
                    <img src="https://edwardtufte.github.io/tufte-css/img/rhino.png"/>
                </MarginNote> */}
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
                <LinkHere href="https://scottorly.github.io/drive">DRIVE</LinkHere>
            </h2>
            <p>
                RxSwift UI Patterns.
            </p>
            <h2>
                <LinkHere href="https://scottorly.github.io/drive2combine">DRIVE II: COMBINE</LinkHere>
            </h2>
            <p>
                Driving Combine.
            </p>
        </section>

        <section>
        <p><code>/dev/work</code></p>

                <h2>
                    <Link href="https://apps.apple.com/us/app/get-help-app/id1319554390">GET HELP</Link>
                </h2>
            <p>
                
            </p>
            <h2>
                <Link href="https://apps.apple.com/us/app/hallmark-shoebox/id1210937098">HALLMARK SHOEBOX</Link>
            </h2>
            <p>
            </p>
            <h2>
                <Link href="https://apps.apple.com/us/app/hallmark-digital-postage/id1450038754">HALLMARK DIGITAL POSTAGE</Link>
            </h2>
            <p>
            </p>
            <h2>
                <Link href="https://vimeo.com/85466100">REALM BLAZER</Link>
            </h2>

        </section>   
            <div className='epigraph'>
            <p><code>/dev/禅</code></p>
                <blockquote>
                    <p>
                        於是緣門再思再審、寂然無言也。<br/>
                        Fate's Disciple thought it over again to himself silently.
                    </p>
                    <p>
                        入理先生乃問曰、汝何以不言。<br/>
                        Dr. Enlightenment asked him, "Why don't you speak?"
                    </p>
                    <p>
                        緣門答曰、我不見一法如微塵許而可對說。<br/>
                        Fate's Disciple answered, "I do not perceive even an atom of a single teaching worth answering."
                    </p>
                    <p>
                        爾時入理先生即語緣門曰、汝今似見真実理也。<br/>
                        Dr. Enlightenment said to Fate's Disciple, "You now appear to perceive the true principle."
                    </p>
                    <p>
                        緣門問曰、云何似見、非正見乎。<br/>
                        Fate's Disciple asked him, "Why did you say 'appear to perceive' and not 'truly perceive'?"
                    </p>
                    <p>
                        入理答曰、汝今所見、無有一法者、如彼外道。雖学隱形、而未能滅影亡跡。<br/>
                        Dr. Enlightenment answered, "What you just witnessed, nihilism, is like a magician who studies invisibility but cannot hide their shadow or cover their tracks."
                    </p>
                    <footer>
                    絕觀論 <br />
                    Record of the Extinction of Insight
                    </footer>
                </blockquote>
            </div> 
    </article>
)
document.head.appendChild(meta)
document.body.appendChild(blog)