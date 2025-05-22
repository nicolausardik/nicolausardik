import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Experience and Education
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
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
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	return (
		<>
			<Title/>
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2021 - 2022</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Shift Engineering Yogyakarta
						</h3>
						<h4 className=" font-light text-md mb-4">
							junior Mekanik
						</h4>
						<p className="text-justify">
							Bertanggung Jawab sebagai operator DYNO MAX, Melakukan tune-up engine, overhaul turbo, Pengelasan serta pembuatan 
							downpipe, dan pemasangan piggyback.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Pembelajaran
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Kesabaran
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Ketahanan Mental
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2022 - 2023</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Rev Engineering Jakarta
						</h3>
						<h4 className=" font-light text-md mb-4">
							Mekanik
						</h4>
						<p className="text-justify">
							Bertanggung jawab sebagai, operator DYNO MAX, tune-up engine, instalasi Turbo, pemasangan piggyback 
							dengan wiring diagram, serta mempelajari tuning, Max ECU, Haltech, Motec, Link Engine Management, Dastek.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Pembelajaran
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Ketelitian
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Kebersihan
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2024 - 2025</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							MR Locus Family Semarang
						</h3>
						<h4 className=" font-light text-md mb-4">
							Leader Barkitchen 
						</h4>
						<p className="text-justify">
							Bertanggung Jawab atas operasional dapur, termasuk persiapan makanan, 
							pengelolaan SDM, serta pemeliharaan kebersihan dan keamanan dapur.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Kepemimpinan
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Kedisiplinan
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Kerapian
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Manajemen Operasional
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
