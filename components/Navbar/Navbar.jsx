import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();

	return (
		<nav className={styles.navigation}>
			<div className={styles.logo}>
				<div>Scuff Unit</div>
			</div>

			<div className={styles.menuList}>
				<Link href="/" className={router.asPath == "/" ? styles.active : ""}>
					Home
				</Link>
				{/* <div className={styles.separator}></div> */}
				<Link
					href="/bingo"
					className={router.asPath == "/bingo" ? styles.active : ""}
				>
					Bingo
				</Link>
			</div>
		</nav>
	);
}
