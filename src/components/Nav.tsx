'use client'

import styles from './Nav.module.css';
import React from "react";
import Link from "next/link";

function Nav(): React.JSX.Element {
    return (
        <ul className={styles.nav}>
            <li className={styles.liItem}>
                <Link href="/" scroll={false}>
                    <p>Home</p>
                </Link>
            </li>
            <li className={styles.liItem}>
                <Link href="/admin" scroll={false}>
                    <p>Admin</p>
                </Link>
            </li>
            <li className={styles.liItem}>
                <Link href="/quiz" scroll={false}>
                    <p>Quiz</p>
                </Link>
            </li>
        </ul>
    )
}

export default Nav