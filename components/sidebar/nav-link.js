'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({tooltip, href, children}) {
    const path = usePathname();

    return (
        <Link href = {href} data-tooltip = {tooltip} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link} >
            {children}
        </Link>
    );
}