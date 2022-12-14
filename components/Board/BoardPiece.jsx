import styles from "./Board.module.css";
import { AiFillLock } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
export default function BoardPiece({
	selectedTeam,
	boardNumber,
	tiles,
	unlocked,
	tileComplete,
	board,
}) {
	return (
		<div className={`${styles.bingoBoard}`}>
			<div className={styles.boardTitle}>{board}</div>
			<div className={styles.tile}>
				{tiles[0]}
				{!tileComplete[tiles[0]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[1]}
				{!tileComplete[tiles[1]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[2]}
				{!tileComplete[tiles[2]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[3]}
				{!tileComplete[tiles[3]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[4]}
				{!tileComplete[tiles[4]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[5]}
				{!tileComplete[tiles[5]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[6]}
				{!tileComplete[tiles[6]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[7]}
				{!tileComplete[tiles[7]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			<div className={styles.tile}>
				{tiles[8]}
				{!tileComplete[tiles[8]] ? (
					""
				) : (
					<div className={styles.tileComplete}>
						<FaCheckCircle></FaCheckCircle>
					</div>
				)}
			</div>
			{unlocked ? (
				""
			) : (
				<div className={styles.boardLocked}>
					<div className={styles.lockedWrapper}>
						<div className={styles.blur}></div>
						<AiFillLock></AiFillLock>
					</div>
				</div>
			)}
		</div>
	);
}
