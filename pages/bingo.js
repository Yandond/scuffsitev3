import styles from "../styles/Bingo.module.scss";
import { useState } from "react";
import { database, app } from "../firebase/clientApp";
import { getDatabase, ref, child, get } from "firebase/database";
import SideNav from "../components/SideNav";
import Board from "../components/Board/Board";

export default function Bingo(props) {
	const [selectedTeam, setSelectedTeam] = useState("Korean Fried Cringelords");

	return (
		<div className={styles.bingoWrapper}>
			<div className={styles.bingoWrapperNav}>
				<SideNav
					props={props.teams.teams}
					setSelectedTeam={setSelectedTeam}
					points={props.points}
				></SideNav>
			</div>
			<div className={styles.bingoWrapperMain}>
				<Board teams={props.teams.teams} selectedTeam={selectedTeam} />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const db = getDatabase(app);
	const dbRef = ref(db);
	let teams = {};
	await get(child(dbRef, `teams`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				teams = snapshot.val();
			} else {
				console.log("No data available please contact site administrator");
			}
		})
		.catch((error) => {
			console.error(error);
		});
	let points = {};
	await get(child(dbRef, `points`))
		.then((snapshot) => {
			if (snapshot.exists()) {
				points = snapshot.val();
			} else {
				console.log("No data available please contact site administrator");
			}
		})
		.catch((error) => {
			console.error(error);
		});

	return {
		props: {
			teams,
			points,
		},
	};
}
