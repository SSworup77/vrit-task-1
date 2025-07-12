import { ArrowRightIcon } from "@radix-ui/react-icons";
import happyLifeGif from "../assets/happy-life.gif";
import testimonial6 from "../assets/image 16.png";
import testimonial5 from "../assets/image 20.png";
import testimonial1 from "../assets/image 21.png";
import likeGif from "../assets/like.gif";
import likesGif from "../assets/likes.gif";
import testimonial4 from "../assets/person-5.png";
import testimonial2 from "../assets/testemonial-1.png";
import testimonial3 from "../assets/testemonial-2.png";
import trophyGif from "../assets/trophy.gif";
import testimonialVideo from "../assets/video.mp4";

const MainTitle = () => {
	return (
		<div className="relative w-full h-screen flex flex-col items-center justify-center group/outer">
			<div className="flex flex-col items-center justify-center gap-3">
				<p className="text-xl">Hear How They Level Up Their Game!</p>
				<p className="font-extrabold text-2xl text-gray-900">
					Skill <span className="text-green">Masters</span> Unite!🤝
				</p>
				<div>
					<p className="flex items-center justify-center font-medium text-sm">
						View all Testimonials
						<span className="inline-block bg-transparent w-3 h-3 animate-shrink-grow"></span>
						<ArrowRightIcon stroke="#010101" strokeWidth={"1px"} />
					</p>
				</div>
			</div>

			<div className="absolute inset-0 rounded-full bg-transparent group-hover/outer:scale-90 transition-transform duration-500 ease-out" />

			{/* Orb Images */}
			<div className="absolute z-0 inset-0 pointer-events-none">
				<img
					src={happyLifeGif}
					alt=""
					className="w-20 translate-x-100 translate-y-90 group-hover/outer:translate-x-40 group-hover/outer:translate-y-100 transition-all duration-500 ease-in-out group-hover/outer:animate-floating"
				/>
				<img
					src={testimonial1}
					alt=""
					className="w-20 translate-x-220 translate-y-40 group-hover/outer:translate-x-250 transition-all duration-500 ease-in-out group-hover/outer:animate-floating-up"
				/>
				<img
					src={testimonial2}
					alt=""
					className="w-20 translate-x-190 translate-y-5 group-hover/outer:-translate-y-20 group-hover/outer:translate-x-220 transition-all duration-500 ease-in-out rounded-3xl group-hover/outer:animate-floating-down"
				/>

				<div className="relative inline-block group/testimonial pointer-events-auto">
					<img
						src={testimonial3}
						alt=""
						className="w-20 translate-x-120 -translate-y-20 group-hover/outer:-translate-y-50 group-hover/outer:translate-x-100 transition-all duration-500 ease-in-out rounded-3xl 
							group-hover/testimonial:shadow-[0_0_25px_#1da176] group-hover/outer:animate-floating-up"
					/>
					<div className="absolute top-full translate-x-140 -translate-y-40 mt-3 w-40 p-2 bg-white rounded-2xl shadow-lg border border-gray-200 group-hover/outer:hidden transition-all duration-500 ease-in-out z-30 text-xs animate-appear-disappear group-hover/outer:[animation-play-state:paused] ">
						<div className="absolute -left-1.5 top-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white" />
						<p className="text-xs text-gray-700 leading-snug">
							Amazing ⭐⭐⭐⭐⭐
						</p>
					</div>
					<div
						className="absolute top-full translate-x-75 -translate-y-50 mt-3 w-[300px] p-4 bg-white rounded-lg shadow-lg border border-gray-200 
		opacity-0 group-hover/testimonial:opacity-100 group-hover/testimonial:animate-floating-up transition-all duration-500 ease-in-out z-30 text-xs"
					>
						<p className="text-xs text-gray-700 leading-snug">
							I was amazed and impressed by the course structure as it was
							distinctly different from other courses in the market. The classes
							were highly interactive and the instructor was very humble and
							friendly. Recordings of the classes were provided within a short
							time after each class, which made revision very easy and
							beneficial. I have recommended the same course to my
							data-enthusiast friends.
						</p>
						<p className="text-xs text-gray-500 mt-2 text-right">
							– Rajesh Dhakal
							<br />
							Digital Marketing Student
						</p>
					</div>
				</div>

				<img
					src={testimonial4}
					alt=""
					className="w-20 translate-x-85 -translate-y-20 group-hover/outer:-translate-y-20 group-hover/outer:translate-x-20 transition-all duration-500 ease-in-out rounded-3xl group-hover/outer:animate-floating-down"
				/>
				<img
					src={testimonial5}
					alt=""
					className="w-20 translate-x-125 -translate-y-15 group-hover/outer:translate-x-120 group-hover/outer:translate-y-15 transition-all duration-500 ease-in-out group-hover/outer:animate-floating-up"
				/>
				<div className="relative inline-block group/special pointer-events-auto">
					<img
						src={testimonial6}
						alt=""
						className="w-20 translate-x-185 -translate-y-35 rounded-3xl group-hover/outer:translate-x-210 group-hover/outer:-translate-y-4 group-hover/special:shadow-[0_0_25px_#1da176] transition-all duration-500 ease-in-out group-hover/outer:animate-floating-down"
					/>
					<div className="absolute top-full translate-x-205 -translate-y-50 mt-3 w-25 p-2 bg-white rounded-2xl shadow-lg border border-gray-200 group-hover/outer:hidden transition-all duration-500 ease-in-out z-30 text-xs animate-appear-disappear group-hover/outer:[animation-play-state:paused] ">
						<div className="absolute -left-1.5 top-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white" />
						<p className="text-xs text-gray-700 leading-snug">⭐⭐⭐⭐⭐</p>
					</div>
					<video
						src={testimonialVideo}
						className="absolute top-full translate-x-210 -translate-y-65 mt-3 w-44 rounded-lg opacity-0 group-hover/special:opacity-100 scale-0 group-hover/special:scale-110 transition-opacity duration-500 ease-in-out z-10 ring-4 ring-gray-200 group-hover/outer:animate-floating-down"
						autoPlay
						loop
						muted
					/>
				</div>
				<img
					src={likeGif}
					alt=""
					className="w-20 translate-x-150 -translate-y-110 group-hover/outer:-translate-y-130 group-hover/outer:translate-x-160 transition-all duration-500 ease-in-out rounded-3xl"
				/>
				<img
					src={trophyGif}
					alt=""
					className="w-20 translate-x-160 -translate-y-75 group-hover/outer:-translate-y-40 group-hover/outer:translate-x-160 transition-all duration-500 ease-in-out rounded-3xl"
				/>
				<img
					src={likesGif}
					alt=""
					className="w-20 translate-x-210 -translate-y-105 group-hover/outer:-translate-y-80 group-hover/outer:translate-x-240 transition-all duration-500 ease-in-out rounded-3xl"
				/>
			</div>
		</div>
	);
};

export default MainTitle;
