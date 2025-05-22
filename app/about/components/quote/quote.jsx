// Quote.js
import "./style.css";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./useIntersectionObserver";

function Wrapper({ children }) {
	return (
		<div className="min-h-[80vh] mx-auto container  p-10 grid grid-cols-1 mt-10 ">
			<motion.div
				className="flex justify-center items-center flex-col mb-5 "
				initial={{
					opacity: 0,
					scale: 0.9,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					delay: 0.6,
					duration: 2,
					ease: [0.22, 1, 0.36, 1],
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Quote() {
	const text1 = '"𝑆𝑎𝑡𝑢-𝑠𝑎𝑡𝑢𝑛𝑦𝑎 𝑏𝑎𝑡𝑎𝑠𝑎𝑛 𝑎𝑡𝑎𝑠 𝑝𝑒𝑛𝑐𝑎𝑝𝑎𝑖𝑎𝑛 𝐴𝑛𝑑𝑎 𝑎𝑑𝑎𝑙𝑎ℎ 𝑏𝑎𝑡𝑎𝑠𝑎𝑛 𝑦𝑎𝑛𝑔 𝐴𝑛𝑑𝑎 𝑐𝑖𝑝𝑡𝑎𝑘𝑎𝑛 𝑑𝑎𝑙𝑎𝑚 𝑝𝑖𝑘𝑖𝑟𝑎𝑛 𝐴𝑛𝑑𝑎 𝑠𝑒𝑛𝑑𝑖𝑟𝑖. 𝐵𝑒𝑏𝑎𝑠𝑘𝑎𝑛 𝑝𝑖𝑘𝑖𝑟𝑎𝑛, 𝑑𝑎𝑛 𝑑𝑢𝑛𝑖𝑎 𝑎𝑘𝑎𝑛 𝑚𝑒𝑚𝑏𝑢𝑘𝑎 𝑗𝑎𝑙𝑎𝑛."'.split(" ");
	const text2 = '"𝑇ℎ𝑒 𝑜𝑛𝑙𝑦 𝑙𝑖𝑚𝑖𝑡𝑠 𝑡𝑜 𝑦𝑜𝑢𝑟 𝑎𝑐ℎ𝑖𝑒𝑣𝑒𝑚𝑒𝑛𝑡𝑠 𝑎𝑟𝑒 𝑡ℎ𝑒 𝑜𝑛𝑒𝑠 𝑦𝑜𝑢 𝑝𝑙𝑎𝑐𝑒 𝑖𝑛 𝑦𝑜𝑢𝑟 𝑜𝑤𝑛 𝑚𝑖𝑛𝑑. 𝐹𝑟𝑒𝑒 𝑦𝑜𝑢𝑟 𝑡ℎ𝑜𝑢𝑔ℎ𝑡𝑠, 𝑎𝑛𝑑 𝑡ℎ𝑒 𝑤𝑜𝑟𝑙𝑑 𝑤𝑖𝑙𝑙 𝑜𝑝𝑒𝑛 𝑖𝑡𝑠 𝑑𝑜𝑜𝑟𝑠."'.split(
		" "
	);
	const [ref, isIntersecting] = useIntersectionObserver();

	return (
		<Wrapper>
			<div ref={ref} className="text-center">
				<h3 className="text-[2rem]">
					{text1.map((word, index) => (
						<motion.span
							key={index}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting ? index * 0.1 : 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
				<h3 className="text-xl">
					{text2.map((word, index) => (
						<motion.span
							key={index + text1.length}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting
									? (text1.length + index) * 0.1
									: 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
			</div>
		</Wrapper>
	);
}
