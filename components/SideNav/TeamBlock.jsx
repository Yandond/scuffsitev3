import * as React from "react";
import { motion } from "framer-motion";
import styles from "./TeamBlock.module.css";
import Image from "next/image";

export default function TeamBlock({ team, participants, flag }) {
	return (
		<motion.div transition={{ duration: 0.8 }} className="content-placeholder">
			<div className={styles.teamBanner}>
				<Image
					src={"/images/" + flag + ".png"}
					alt={flag}
					layout="fill"
				></Image>
			</div>
			{participants.map((player) => {
				return (
					<>
						<div className={styles.playerTab} key={player}>
							<div className={styles.playerName}>{player}</div>
						</div>
					</>
				);
			})}
		</motion.div>
	);
}
