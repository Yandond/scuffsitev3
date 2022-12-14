import { useState } from "react";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import { FaKey } from "react-icons/fa";
import { useRouter } from "next/router";

const errorMessage = (errorCode) => {
	switch (errorCode) {
		case "auth/invalid-email":
			return "The provided email is invalid";

		case "auth/wrong-password":
			return "The provided password was incorrect";

		case "auth/user-not-found":
			return "The provided email has not been registered with us";
		case "auth/internal-error":
			return "Please provide a password";
	}
};

export default function Login() {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [loginError, setLoginError] = useState("");
	const router = useRouter();

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
		} catch (error) {
			console.log(error);
			setLoginError(error);
		}
	};

	return (
		<div className={styles.loginFormContainer}>
			<div className={styles.loginBox}>
				<div className={styles.loginKey}>
					<svg width="0" height="0">
						<linearGradient
							id="blue-gradient"
							x1="100%"
							y1="100%"
							x2="0%"
							y2="0%"
						>
							<stop stopColor="#27EF9F" offset="0%" />
							<stop stopColor="#0DB8DE" offset="100%" />
						</linearGradient>
					</svg>
					<FaKey style={{ fill: "url(#blue-gradient)" }}></FaKey>
				</div>
				<div className={styles.loginTitle}>SCUFF BINGO ADMIN PANEL</div>
				<div className={styles.loginForm}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div className={styles.formGroup}>
							<label className={styles.formControlLabel}>E-MAIL</label>
							<input
								onChange={(event) => {
									setLoginEmail(event.target.value);
								}}
								type="text"
								className={styles.formControl}
							/>
						</div>
						<div className={styles.formGroup}>
							<label className={styles.formControlLabel}>PASSWORD</label>
							<input
								onChange={(event) => {
									setLoginPassword(event.target.value);
								}}
								type="password"
								className={styles.formControl}
								i
							/>
						</div>

						<div className={styles.loginBottom}>
							{loginError ? (
								<div className={`${styles.loginText}`}>
									{errorMessage(loginError.code)}
								</div>
							) : (
								""
							)}
							<div className={`${styles.loginBtm} ${styles.loginButton}`}>
								<button
									className={`${styles.buttonThing} ${styles.btnOutlinePrimary}`}
									onClick={login}
								>
									LOGIN
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
