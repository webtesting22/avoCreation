import Image from 'next/image';
import "./Navigation.css";

export default function AvoNavigation() {
    const Links = [
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "About",
            path: "/about",
            dropdown: [
                {
                    name: "Vision", path: "/about/vision",
                    dropdown: [
                        { name: "goal", path: "/about/vision/goal" },
                        { name: "plans", path: "/about/vision/plans" },
                    ]
                },
                { name: "Clients", path: "/about/client" },
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
                {
                    name: "Products", path: "/services/products",
                    dropdown: [
                        { name: "sweets", path: "/services/products/sweets" },
                        { name: "choclate", path: "/services/products/choclate" },
                    ]
                },



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
                    <a href='/'>
                        <Image src="/images/AvoLogo.png" width={100} height={5} alt="Avo Logo" />
                    </a>
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
                <div className='mobileNavigationBar'>
                    <div className='menuButton'>
                        <Image src="/images/menu-regular-24.png" width={24} height={24} alt='Menu Icon'></Image>
                    </div>
                </div>
            </div>

        </navbar>

    );
}
