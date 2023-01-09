import "./index.css";
import QR from "./assets/image-qr-code.png";

function App() {
	return (
		<div className="bg-[#D6E2F0] min-h-screen flex justify-center items-center w-[100%] text-base p-10 font-Outfit">
			<div className="bg-white flex rounded-xl  flex-col p-4 max-w-[310px] ">
				<img className="rounded-xl  " src={QR} alt="QR code to frontendmentor.io" />
				<h1 className="text-center text-[#1F3251] p-4  font-[700] text-xl ">
					Improve your front-end skills by building projects
				</h1>
				<p className="text-center text-[#7B879D] text-[15px] font-[400] px-2 ">
					Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
				</p>
			</div>
		</div>
	);
}

export default App;
