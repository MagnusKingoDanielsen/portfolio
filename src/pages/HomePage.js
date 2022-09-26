import Typewriter from 'typewriter-effect';
import PostItem from '../components/postItem'
import { useState, useEffect } from "react";
import photo from "../om-mig-photo.jpg";
let iAm = [' a frontend developer',' a scout', 'a multimediadesigner', 'a nerd', 'a boardgame enthusiast'];


export default function HomePage() {
    const [posts, setPosts] = useState([]);

useEffect(() => {
    async function getData() {
        const response = await fetch("https://wordpress.magnuskingo.dk/wp-json/wp/v2/posts?_embed");
        const data = await response.json();
                    console.log(data);
        setPosts(data);
    }
    getData();
}, []);

const [text, setText] = useState(false)
const TEXT_CHANGE_THRESHOLD = 600;
const changeText = () => {
    if(window.scrollY >= TEXT_CHANGE_THRESHOLD && text !== true){
        setText(true)
    }
    if(window.scrollY < TEXT_CHANGE_THRESHOLD && text !== false){
        setText(false)
    }}
    
    window.addEventListener('scroll',changeText)

    return (
        <section className="page" id='Top'>
            <div className='heroimg'>
            <div className='heroimgtop'>
                <div className={text ? 'text' : 'text fixed'}>
            <h1>Magnus Kingo Danielsen</h1>
                <div className='typeWriter'>
                    <p>I am </p><Typewriter options={{strings: iAm, autoStart: true, loop: true, deleteSpeed: 10, delay:50}}/>
                    </div>
                </div>
            </div>
            </div>
            <section className="portfolio" id='projekt'>    
                <h1>Mine projekter</h1>
                <div className='grid-container'>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            </section>
            <div className='line' id='omMig'></div>
            <section className='om-mig'>
                <div className='om-mig-tekst'>
                    <h1>Hvem er jeg?</h1>
                    <p>Jeg en en frisk fyr på 22 år, der til dagligt studerer til multimedie designer på erhversakadamiet i Århus. I min fritid er jeg meget intreserret indenfor teknologi og alt hvad det indebærer. Alt fra computere til IOT til 3D printere. Selvom jeg godt kan lide at side foran en computer så er jeg også et naturmenneske der nyder gåture i diverse omgivelser eller en tur i kajak. Dette kommer fra mine mere end 15 år som spejder hvor jeg både som spejder og spejderleder har været på adskillige ture, lejre og kurser både i Danmark men også i udlandet. </p>
                    <h1>Hvorfor Frontend?</h1>
                    <p>Siden gymnasiet hvor jeg for første gang dyppede føderne i html og css har jeg været facineret. Måden hvorpå koden man skriver skaber og ændre siden med det samme er fantastisk. Den visuelle feedback på ens kode har været med til at jeg blev fanget af det, og da jeg senere lærte andre sprog som javascript blev mulighederne bare uendelige. Jeg elsker at side og nørde med koden for at se dele af siden blive opbygget og hvordan det hele til sidst skaber en samlet helhed. </p>
                </div>
                <div className='om-mig-img'><img src={photo} alt='billede af Magnus Kingo Danielsen'></img></div>
            </section>
        </section>
    );
}
