import './tufte.module.css'

const Link = ({ children, attributes: { href }}) => (
    <a target="_blank" rel="noreferrer noopener" href={href}>
        {children}
     </a>
)

const MarginNote = ({ children }) => (
    <>
        <label for="mn-demo" className="margin-toggle">&#8853;</label>
        <input type="checkbox" id="mn-demo" className="margin-toggle"/>
        <span className="marginnote">
            { children }
        </span>
    </>
)

const SideNote = ({ children }) => (
    <>
        <label for="sn-demo" className="margin-toggle sidenote-number"/>
        <input type="checkbox" id="sn-demo" className="margin-toggle"/>
        <span className="sidenote">
            { children }
        </span>
    </>
)

const blog = (
    <article>
        <section>
            <p>    
                <MarginNote>
                    <Link href='https://apps.apple.com/us/developer/scott-orlyck/id1082162815'>App Store</Link> <br />
                    <Link href='https://github.com/scottorly'>GitHub</Link> <br />
                    <Link href='https://linkedin.com/in/scottorlyck'>LinkedIn</Link> <br />
                </MarginNote>
                <h1>Scott Orlyck</h1>
            </p>        
        </section>

        <section>
            <p>
                <span className='newthought'>Some of the projects</span> I have built or helped build.
            </p>
        </section>

        <section>
            <h2><Link href="https://montecarloxo.com">Monte Carlo XO</Link></h2>
            <p>AR Tic-tac-toe.</p>
        </section>

        <section>
            <h2><Link href="https://tarotarcana.app">Tarot Arcana</Link></h2>
            <p>AR Divination Simulator.</p>
        </section>
        <section>
            <h2><Link href="https://coviz19.dev">COVIZ-19</Link></h2>
            <p>Animated choropleth visualization of US COVID-19 data from JHU.</p>
        </section>
        <section>
            <h2><Link href="https://scottorly.github.io/drive">Drive</Link></h2>
            <p>iOS RxSwift UI Patterns</p>
        </section>
        <section>
            <h2><Link href="https://scottorly.github.io/drive2combine">Drive II: Combine</Link></h2>
            <p></p>
        </section>
        <section>
            <h2><Link href="https://apps.apple.com/us/app/get-help-app/id1319554390">Get Help</Link></h2>
        </section>
        <section>
            <h2><Link href="https://apps.apple.com/us/app/hallmark-shoebox/id1210937098">Hallmark Shoebox</Link></h2>
        </section>
        <section>
            <h2><Link href="https://apps.apple.com/us/app/hallmark-digital-postage/id1450038754">Hallmark Digital Postage</Link></h2>
        </section>    
    </article>
)

document.body.appendChild(blog)