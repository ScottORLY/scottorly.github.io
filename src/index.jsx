import './tufte.module.css'
import styles from './styles.module.css'

const Link = ({ children, attributes: { href }}) => (
    <a target="_blank" rel="noreferrer noopener" href={href}>
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
            <p>Apps</p>
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
            <p>Blogs</p>
            <h2>
                <Link href="https://scottorly.github.io/drive">DRIVE</Link>
            </h2>
            <p>
                iOS RxSwift UI Patterns
            </p>
            <h2>
                    <Link href="https://scottorly.github.io/drive2combine">DRIVE II: COMBINE</Link>
            </h2>
            <p>
                <em>Coming Soon.</em>
            </p>
        </section>

        <section>
            <p>Work</p>
                <h2><Link href="https://apps.apple.com/us/app/get-help-app/id1319554390">GET HELP</Link></h2>
            <p>
                
            </p>
                <h2><Link href="https://apps.apple.com/us/app/hallmark-shoebox/id1210937098">HALLMARK SHOEBOX</Link></h2>
            <p>
            </p>
                <h2><Link href="https://apps.apple.com/us/app/hallmark-digital-postage/id1450038754">HALLMARK DIGITAL POSTAGE</Link></h2>
            <p>
            </p>
        </section>   

        <section>
            <div className='epigraph'>
                <blockquote>
                    <p>“When the cart doesn't move, do you goad the cart or the ox?”</p>
                    <footer>
                    南嶽懐譲 Nanyue Huairang
                    </footer>
                </blockquote>
            </div>    
        </section> 
    </article>
)

document.body.appendChild(blog)