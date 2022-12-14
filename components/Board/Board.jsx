import styles from "./Board.module.css";
import BoardPiece from "./BoardPiece";
import Carousel from "framer-motion-carousel";
const temporaryBoard = [
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
	"Not Unlocked",
];
export default function Board({ teams, selectedTeam }) {
	return (
		<div className={styles.boardWrapper}>
			<div className={styles.teamName}>{selectedTeam}</div>

			<Carousel autoPlay={false}>
				<div className={styles.carouselBoardWrapper}>
					<BoardPiece
						board={"Easy Board"}
						tiles={Object.keys(teams[selectedTeam].board1)}
						unlocked={true}
						tileComplete={teams[selectedTeam].board1}
					></BoardPiece>
				</div>

				<div className={styles.carouselBoardWrapper}>
					<BoardPiece
						board={"Medium Board"}
						tiles={
							teams[selectedTeam].board1Complete
								? Object.keys(teams[selectedTeam].board2)
								: temporaryBoard
						}
						unlocked={teams[selectedTeam].board1Complete}
						tileComplete={teams[selectedTeam].board2}
					></BoardPiece>
				</div>
				<div className={styles.carouselBoardWrapper}>
					<BoardPiece
						board={"Hard Board"}
						tiles={
							teams[selectedTeam].board2Complete
								? Object.keys(teams[selectedTeam].board3)
								: temporaryBoard
						}
						unlocked={teams[selectedTeam].board2Complete}
						tileComplete={teams[selectedTeam].board3}
					></BoardPiece>
				</div>
			</Carousel>
		</div>
	);
}
