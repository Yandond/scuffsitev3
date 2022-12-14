import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.home}>
			<Head>
				<title>Scuff Unit</title>
				<meta
					name="description"
					content="Welcome to the home of Scuff Unit. Oldschool Runescape's greatest clan"
				/>
				<link rel="icon" href="/favicon-32x32.ico"></link>

				<meta property="og:type" content="website" />
				<meta property="og:title" content="Scuff Unit" />
				<meta property="og:url" content="www.scuffunit.com" />
				<meta
					property="og:image"
					content="https://www.scuffunit.com/images/SULOGO.png"
				/>
				<meta
					property="og:description"
					content="Welcome to the home of Scuff Unit. Oldschool Runescape's greatest clan"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="Scuff Unit" />
				<meta name="twitter:title" content="Scuff Unit" />
				<meta
					name="twitter:description"
					content="Welcome to the home of Scuff Unit. Oldschool Runescape's greatest clan"
				/>
				<meta
					name="twitter:image"
					content="https://www.scuffunit.com/images/SULOGO.png"
				/>
			</Head>
			<div className={styles.home}>
				<h1>Welcome to the Scuff Winter Bingo of 2022</h1>
			</div>
		</div>
	);
}
