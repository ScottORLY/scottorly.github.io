
const props = {
    description: "Scott Orlyck's website.",
    title: "Scott Orlyck",
    image: "https://raw.githubusercontent.com/scottorly/scottorly.github.io/main/thumbnail.png",
    url: "https://scottorly.github.io",
    twitter: "@orlyck"
}

export default <>
    <meta name="Description" content={props.description}/>
    <meta name="twitter:title" content={props.title}/>
    <meta name="twitter:description" content={props.description}/>
    <meta name="twitter:image" content={props.image}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content={props.url}/>
    <meta name="twitter:creator" content={props.twitter}/>
    <meta property="og:url" content={props.url}/>
    <meta property="og:title" content={props.title}/>
    <meta property="og:description" content={props.description}/>
    <meta property="og:image" content={props.image}/>
    <meta property="og:image:secure" content={props.image}/>
</>