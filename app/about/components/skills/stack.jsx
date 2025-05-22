import { motion } from "framer-motion";

export default function Stack() {
  return (
		<motion.div
			className="flex justify-center items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: -200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.5,

				type: "spring",
			}}>
			<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
				HARD SKILL
			</h2>
			<p className="text-gray-500 text-center tracking-widest md:px-5">
				<span className="text-black font-medium">Merumuskan permasalahan keteknikan secara sistematis, 
					Menyelesaikan permasalahan teknis di lapangan dan 
					Mampuan melakukan sintesis dalam bentuk desain.</span> {" "}
			</p>
		</motion.div>
  );
}