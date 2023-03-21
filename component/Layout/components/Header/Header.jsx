import React, { useState } from 'react'
import Searchpopup from '../Searchpopup/Searchpopup'
import Sidebar from '../Sidebar/Sidebar'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
    const router = useRouter();
    const { pathname } = router;
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <div className={`header-area ${pathname !== '/' ? 'style-three' : ''}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center d-flex">
                        <div className="col-lg-3">
                            <div className="header-logo">
                                <Link className="main-logo" href='/'><img src="assets/images/HOC-DAO-LOGO.png" alt="" /> </Link>
                                <Link className="stiky-logo" href='/'> <img src="assets/images/HOC-DAO-LOGO.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <nav className="cryptozen_menu">
                                <div className="header-menu">
                                    <ul className="nav_scroll">
                                        <li><Link href='/'>Home</Link>
                                        </li>
                                        <li><Link href='/about'>about</Link>
                                        </li>
                                        <li><a href="Javascript:void(0);">pages <i className="fas fa-angle-down"></i></a>
                                            <div className="sub-menu">
                                                <ul>
                                                    <li><Link href='/about'>about us </Link></li>
                                                    <li><Link href='/team'>our team</Link></li>
                                                    <li><Link href='/token'>token</Link></li>
                                                    <li><Link href='/roadmap'>road</Link></li>
                                                    <li><Link href='/contact'>contact</Link></li>
                                                    <li><Link href='/choose'>choose</Link></li>
                                                    <li><Link href='faq'>faq</Link></li>
                                                    <li><Link href='/blogdetails'>blog details</Link></li>
                                                    <li><Link href='/bloggrid'>blog grid</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link href='/roadmap'>road map</Link>
                                        </li>
                                        <li><Link href='/team'>team</Link>
                                        </li>
                                        <li><Link href='/contact'>contact</Link></li>
                                    </ul>
                                    <div className="header-btn">
                                        <a href="Javascript:void(0);">Get Token</a>
                                    </div>
                                    <div className="sidebar">
                                        <div className="header-src-btn">
                                            <div className="search-box-btn search-box-outer"><i className="fas fa-search"></i></div>
                                        </div>
                                        <div onClick={() => setSidebar(true)} className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2"></span></div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile menu seection  */}
            <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
                <div className="mobile-menu">
                    <nav className="itsoft_menu">
                        <ul className="nav_scroll">
                            <li><a href="Javascript:void(0);">demo</a>
                                <div className="sub-menu">
                                    <ul>
                                        <li><a href="index.html">homepage one</a></li>
                                        <li><a href="index-2.html">homepage two </a></li>
                                        <li><a href="index-3.html">homepage three </a></li>
                                        <li><a href="index-4.html">homepage four</a></li>
                                        <li><a href="index-9.html">homepage five New</a></li>
                                        <li><a href="index-6.html">animation page</a></li>
                                        <li><a href="index-5.html">Landing Page 01</a></li>
                                        <li><a href="index-7.html">Landing Page 02</a></li>
                                        <li><a href="index-8.html">Home Video</a></li>
                                        <li><a href="index-10.html">Home Particle</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="about.html">about</a>
                            </li>
                            <li><a href="Javascript:void(0);">pages</a>
                                <div className="sub-menu">
                                    <ul>
                                        <li><a href="about.html">about us </a></li>
                                        <li><a href="team.html">our team</a></li>
                                        <li><a href="token.html">token</a></li>
                                        <li><a href="road-map.html">road</a></li>
                                        <li><a href="contact.html">contact</a></li>
                                        <li><a href="choose.html">choose</a></li>
                                        <li><a href="faq.html">faq</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                        <li><a href="blog-grid.html">blog grid</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="road-map.html">road map</a>
                            </li>
                            <li><a href="team.html">team</a>
                            </li>
                            <li><a href="contact.html">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Searchpopup />
            <Sidebar active={sidebar} setActive={setSidebar} />
        </>
    )
}

export default Header