import facebook from "../facebooklogo.png";
import instagram from "../instagramlogo.png";
import linkedin from "../linkedinlogo.png";

export default function Footer(){

    return(
    <div className="footer">
        <div className="footer-content">
        <div className="SoMe">
            <h2>Sociale medier</h2>
            <a href="https://www.instagram.com/magnus.danielsen/" target='_blank'><img src={instagram} alt="instagram logo" /></a>
            <a href="https://www.facebook.com/magnus.danielsen.773" target='_blank'><img src={facebook} alt="instagram logo" /></a>
            <a href="https://www.linkedin.com/in/magnus-danielsen-93b2401b2/" target='_blank'><img src={linkedin} alt="instagram logo" /></a>
        </div>
        <div className="Kontakt">
            <h2>Kontakt</h2>
            <ul>
                <li>Magnus Kingo Danielsen</li>
                <li>+45 61 67 02 75</li>
                <li><a href="mailto:magnus@metteogivar.dk">magnus@metteogivar.dk</a></li>
            </ul>
        </div>
        </div>
        <p>Copyright © 2022 - Magnus Kingo Danielsen</p>
    </div>
)
}