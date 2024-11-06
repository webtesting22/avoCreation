import Image from 'next/image';
import "./Navigation.css";
import AvoLogo from "../Images/AvoLogo.png"
export default function AvoNavigation() {
    const Links = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];

    return (
        <navbar>
            <div className="NavigationContainer">
                <div className="LogoContainer">
                <Image src={AvoLogo} alt="Avo Logo"/>
                </div>

                <div className="NavigationLinksContainer">
                    {Links.map((link, index) => (
                        <a key={index} href={link.path} className="navLink">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="extrabtnContainer">
                    {/* Extra button here */}
                </div>
            </div>
        </navbar>
    );
}
