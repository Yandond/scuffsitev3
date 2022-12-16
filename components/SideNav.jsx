import styles from "./SideNav.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamBlock from "./SideNav/TeamBlock";
import { AiFillStar } from "react-icons/ai";

const Accordion = ({
	i,
	expanded,
	setExpanded,
	team,
	teamName,
	closedName,
	participants,
	shopPoints,
	setSelectedTeam,
	points,
}) => {
	const isOpen = i === expanded;

	// By using `AnimatePresence` to mount and unmount the contents, we can animate
	// them in and out while also only rendering the contents of open accordion
	return (
		<>
			<motion.header
				initial={closedName === "kfc" ? true : false}
				onClick={() => {
					setExpanded(isOpen ? false : i);
					setSelectedTeam(teamName);
				}}
				className={`${styles.motionHeader} ${
					isOpen ? "" : styles.closedHeader
				}`}
			>
				<div className={`${styles.teamName} ${isOpen ? styles.openTeam : ""}`}>
					{isOpen ? teamName : "#" + closedName}
				</div>
			</motion.header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.section
						className={styles.motionSection}
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<TeamBlock
							team={closedName}
							participants={participants}
							flag={closedName}
							points={points}
						></TeamBlock>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};

export default function SideNav({ props, setSelectedTeam, points }) {
	// This approach is if you only want max one section open at a time. If you want multiple
	// sections to potentially be open simultaneously, they can all be given their own `useState`.
	const [expanded, setExpanded] = useState(0);
	const teams = props;

	return Object.keys(teams).map((i) => (
		<Accordion
			i={i}
			key={i}
			team={teams[i]}
			teamName={teams[i].teamName}
			closedName={teams[i].teamNameShort}
			participants={teams[i].participants}
			shopPoints={teams[i].tileShopPoints}
			expanded={expanded}
			setSelectedTeam={setSelectedTeam}
			setExpanded={setExpanded}
			points={points}
		/>
	));
}
