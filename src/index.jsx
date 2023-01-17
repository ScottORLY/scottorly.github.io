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
            <p><code>/dev/diffusion</code></p>
            <h2>
                <Link href="https://scottorly.github.io/diffusion">DIFFUSION</Link>
            </h2>
            <p />
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
                    學般若菩薩，先當起大悲心，發弘誓願，精脩三昧，誓度眾生，不為一身獨求解脫。爾乃放捨諸緣，休息萬事，身心一如，動靜無間
                </p>
                <p>
                    <em>
                        To study the Perfection of Wisdom, first give rise to a heart of great compassion, 
                        make a solemn oath to cultivate the essense of samadhi for the benefit of all living things not just to liberate oneself.
                        Let go of all causes, put to rest all worldly concerns, body and mind as one, no gap between movement and stillness.
                    </em>
                </p>
                <p>
                    一切善惡都莫思量，念起即覺，覺之即失，久久忘緣，自成一片。此坐禪之要術也。
                </p>
                <p>
                    <em>
                        All together don't think of good or evil, when a thought arises become aware of it, 
                        awareness dissolves the thought, forgetful of conditions for a long time, mind naturally becomes unified. 
                        This is the essential method of seated meditation.
                    </em>
                </p>
                <p><em>坐禪儀, 禪苑清規, 長蘆宗賾 1103 CE</em></p>
                <p><em>Rules for Seated Meditation, Rules of Purity in the Chan Monastery, Changlu Zongze 1103 CE</em></p>
            </blockquote>
        </div> 
    </article>
)
document.head.appendChild(meta)
document.head.appendChild( 
    <script async defer data-domain="scottorly.github.io" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(blog)
