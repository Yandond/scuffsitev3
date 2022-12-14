import { database, app, auth } from "../firebase/clientApp";
import { getDatabase, ref, child, get, update } from "firebase/database";
import styles from "../styles/Admin.module.css";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import Login from "../components/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AdminPage({ teams }) {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(1);
	const [bingoTeams, setBingoTeams] = useState(teams.teams);
	const [selectedTeam, setSelectedTeam] = useState(Object.keys(teams.teams)[0]);
	const [selectedBoard, setSelectedBoard] = useState(1);
	const currentTeam = bingoTeams[selectedTeam];
	const [currentBoard, setCurrentBoard] = useState(
		currentTeam[`board${selectedBoard}`]
	);
	const [User, setUser] = useState({});

	const boardHandler = (index) => {
		Object.keys(currentBoard).map((tile) => {
			if (tile === Object.keys(currentBoard)[index]) {
				setCurrentBoard({
					...currentBoard,
					[Object.keys(currentBoard)[index]]:
						!currentBoard[Object.keys(currentBoard)[index]],
				});
			}
		});
	};

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const logout = async () => {
		await signOut(auth);
	};

	const handleUpdate = async () => {
		const temp = { ...bingoTeams };

		const db = getDatabase(app);
		let updates = {};
		updates[`teams/teams/${currentTeam.teamName}/board${selectedBoard}`] =
			currentBoard;
		if (Object.values(currentBoard).every((item) => item === true)) {
			updates[
				`teams/teams/${currentTeam.teamName}/board${selectedBoard}Complete`
			] = true;
			temp[selectedTeam][`board${selectedBoard}Complete`] = true;
		} else {
			updates[
				`teams/teams/${currentTeam.teamName}/board${selectedBoard}Complete`
			] = false;
			temp[selectedTeam][`board${selectedBoard}Complete`] = false;
		}
		try {
			await update(ref(db), updates);

			temp[selectedTeam][`board${selectedBoard}`] = currentBoard;
			setBingoTeams(temp);
			alert("Update Successful");
		} catch (e) {
			alert(e);
		}
	};

	return (
		<div className={styles.adminWrapper}>
			<div className={styles.adminContainer}>
				<div className={styles.adminTitle}>Admin Panel</div>

				<div className={styles.tabs}>
					<button
						className={`${styles.tab} ${
							activeTab == 1 ? styles.activeTab : ""
						}`}
						onClick={() => setActiveTab(1)}
					>
						Update Boards
					</button>
					<button
						className={`${styles.tab} ${
							activeTab == 2 ? styles.activeTab : ""
						}`}
						onClick={() => setActiveTab(2)}
					>
						Add Events
					</button>
				</div>

				<div className={`${activeTab === 1 ? "" : styles.updateBoardWrapper}`}>
					<div className={styles.currentTeam}>{selectedTeam}</div>
					<div className={styles.teamSelectionContainer}>
						<div className={styles.selectLabel}>Select a team</div>
						<label className={styles.teamLabel} htmlFor="teams">
							<select
								className={styles.teamSelect}
								name="teams"
								id="teams"
								onChange={(e) => {
									setSelectedTeam(e.target.value);
									setCurrentBoard(
										bingoTeams[e.target.value][`board${selectedBoard}`]
									);
								}}
							>
								{Object.keys(bingoTeams).map((team) => {
									return (
										<option
											value={bingoTeams[team].teamName}
											key={bingoTeams[team].teamNameShort}
										>
											{bingoTeams[team].teamNameShort}
										</option>
									);
								})}
							</select>
						</label>
					</div>
					<div className={styles.boardSelectionContainer}>
						<button
							className={`${styles.boardSelector} ${
								selectedBoard == 1 ? styles.active : ""
							}`}
							onClick={() => {
								setSelectedBoard(1);
								setCurrentBoard(currentTeam[`board1`]);
							}}
						>
							EASY BOARD
						</button>
						<button
							className={`${styles.boardSelector} ${
								selectedBoard == 2 ? styles.active : ""
							}`}
							onClick={() => {
								setSelectedBoard(2);
								setCurrentBoard(currentTeam[`board2`]);
							}}
						>
							MEDIUM BOARD
						</button>
						<button
							className={`${styles.boardSelector} ${
								selectedBoard == 3 ? styles.active : ""
							}`}
							onClick={() => {
								setSelectedBoard(3);
								setCurrentBoard(currentTeam[`board3`]);
							}}
						>
							HARD BOARD
						</button>
					</div>
					<div className={styles.tileSelector}>
						<div className={styles.board}>
							<div
								onClick={() => {
									boardHandler(0);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[0]}
								{!currentBoard[Object.keys(currentBoard)[0]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(1);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[1]}
								{!currentBoard[Object.keys(currentBoard)[1]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(2);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[2]}
								{!currentBoard[Object.keys(currentBoard)[2]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(3);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[3]}
								{!currentBoard[Object.keys(currentBoard)[3]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(4);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[4]}
								{!currentBoard[Object.keys(currentBoard)[4]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(5);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[5]}
								{!currentBoard[Object.keys(currentBoard)[5]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(6);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[6]}
								{!currentBoard[Object.keys(currentBoard)[6]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(7);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[7]}
								{!currentBoard[Object.keys(currentBoard)[7]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
							<div
								onClick={() => {
									boardHandler(8);
								}}
								className={styles.tile}
							>
								{Object.keys(currentBoard)[8]}
								{!currentBoard[Object.keys(currentBoard)[8]] ? (
									""
								) : (
									<div className={styles.tileComplete}>
										<FaCheckCircle></FaCheckCircle>
									</div>
								)}
							</div>
						</div>
					</div>
					<button
						onClick={() => {
							handleUpdate();
						}}
						className={`${styles.boardSelector} ${styles.updateBtn}`}
					>
						Update
					</button>
					<button
						className={`${styles.boardSelector} ${styles.logoutBtn}`}
						onClick={() => {
							logout();
						}}
					>
						Logout
					</button>
				</div>
				<div className={`${activeTab === 2 ? "" : styles.eventsWrapper}`}>
					<div className={styles.eventsContainer}>under construction</div>
				</div>
			</div>
		</div>
	);
}
