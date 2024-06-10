import Link from 'next/link';
import Image from 'next/image';

import NavLink from './nav-link';
import logoImg from '@/public/images/emas.png';
import classes from './main-header.module.css';


export default function MainHeader() {

    return (
        <>
        <header className={classes.container}>
            <Link className={classes.header} href="/">
                <Image src={logoImg} alt="Next Evolution" className={classes.logo} priority />
                Neo IoT 
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink href='/login'>Log In</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}