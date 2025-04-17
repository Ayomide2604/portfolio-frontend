import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaNodeJs,
	FaPython,
	FaJsSquare,
	FaDatabase,
	FaCloud,
	FaKey,
} from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiDjango, SiSqlite } from "react-icons/si";

const skills = [
	{ name: "HTML5", Icon: FaHtml5, color: "#e34c26" },
	{ name: "CSS3", Icon: FaCss3Alt, color: "#264de4" },
	{ name: "Bootstrap", Icon: FaBootstrap, color: "#563d7c" },
	{ name: "JavaScript", Icon: FaJsSquare, color: "#f0db4f" },
	{ name: "Node.js", Icon: FaNodeJs, color: "#8cc84b" },
	{ name: "Django", Icon: SiDjango, color: "#092e20" },
	{ name: "Python", Icon: FaPython, color: "#306998" },
	{ name: "MongoDB", Icon: SiMongodb, color: "#4caa44" },
	{ name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
	{ name: "SQLite", Icon: SiSqlite, color: "#003B57" },
];
export default skills;
