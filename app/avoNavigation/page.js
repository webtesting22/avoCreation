import Image from 'next/image';
import "./Navigation.css";
import AvoLogo from "../Images/AvoLogo.png";

export default function AvoNavigation() {
    const Links = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "About",
            path: "/about",
            dropdown:[
                {name:"our vision", path:"/about/vision",
                    dropdown:[
                        {name:"goal", path:"/about/vision/goal"},
                        {name:"plans", path:"/about/vision/plans"},
                    ]
                },
                {name:"our client", path:"/about/client"},
            ]
        },
        {
            name: "Services",
            path: "/services",
            dropdown: [
                { 
                    name: "Hampers", 
                    path: "/services/hampers",
                    dropdown: [
                        { name: "Bookey", path: "/services/hampers/bookey" },
                        { name: "Bookey", path: "/services/hampers/bookey" },
                    ]
                },
                { name: "products",path: "/services/products",
                    dropdown:[
                        { name: "sweets", path: "/services/products/sweets"},
                        { name: "choclate",path:"/services/products/choclate"},
                    ]
                },
                { name: "Hampers", path: "/services/hampers" },
                { name: "Hampers", path: "/services/hampers" },
                
                
            ]
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
                    <Image src={AvoLogo} alt="Avo Logo" />
                </div>

                <div className="NavigationLinksContainer">
                    {Links.map((link, index) => (
                        link.dropdown ? (
                            <div key={index} className="navItemWithDropdown">
                                <a href={link.path} className="navLink">
                                    {link.name}
                                </a>
                                <div className="dropdownMenu">
                                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                                        <div key={dropdownIndex} className="dropdownItemWithSubmenu">
                                            <a href={dropdownItem.path} className="dropdownItem">
                                                {dropdownItem.name}
                                            </a>
                                            {dropdownItem.dropdown && (
                                                <div className="submenu">
                                                    {dropdownItem.dropdown.map((subItem, subIndex) => (
                                                        <a key={subIndex} href={subItem.path} className="submenuItem">
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={index} href={link.path} className="navLink">
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                <div className="extrabtnContainer">
                    {/* Extra button here */}
                </div>
            </div>
        </navbar>
    );
}
