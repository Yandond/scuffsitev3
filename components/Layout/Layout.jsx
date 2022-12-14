import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

export default function Layout({ children }) {
	
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
				/>
				<meta
					httpEquiv="ScreenOrientation"
					content="autoRotate:disabled"
				></meta>
			</Head>
			<Navbar />
			<main
				className={`${styles.mainContainer} ${
					children.type.name === "bingo" ? styles.bingoPage : ""
				}`}
			>
				{children}
			</main>
		</>
	);
}
