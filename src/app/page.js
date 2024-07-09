"use client";
import Image from "next/image";
import { Dela_Gothic_One, DM_Sans } from "next/font/google";
import Link from "next/link";
import confetti from "canvas-confetti";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import LogoBlanc from "@/public/logo_blanc.svg";
import Fete from "@/public/fete.png";
//import Profil1 from "";
import Profil2 from "/public/profil2.png";
import Profil3 from "@/public/profil3.png";
import Profil4 from "@/public/profil4.png";
import Group1 from "@/public/group1.png";
import Group2 from "@/public/group2.png";
import Group3 from "@/public/group3.png";
import Money from "@/public/money.svg";
import Pastabox from "@/public/pastabox.svg";
import CoeurMain from "@/public/coeur_main.svg";
import Globe from "@/public/globe.svg";
import ArrowRight from "@/public/arrow_right.svg";
import LogoNoir from "@/public/logo_noir.svg";
import Twitter from "@/public/twitter.svg";
import BackgroundGrid from "@/public/background-grid.svg";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";




const delaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });
const dm_sans = DM_Sans({ subsets: ["latin"] });



function validateEmail(email) {
  // Expression régulière pour valider l'adresse e-mail
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Tester l'email avec l'expression régulière
  return regex.test(email);
}



export default function Home() {
  const [decalage, setDecalage] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState(false);
console.log("background-grid", BackgroundGrid)
  const handleClick = () => {
    if (validateEmail(email)) {
      setErrorMail(false);
      toast.success("Congratulations, you're now the Hero of your store!", { duration: 4000 });
      const end = Date.now() + 3 * 1000; // 3 seconds
      const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
  
      const frame = () => {
        if (Date.now() > end) return;
  
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
        });
  
        requestAnimationFrame(frame);
      }
      frame();
  
    }else{
      toast.error("Please enter a valid email address", { duration: 4000 });
      setErrorMail(true);
    }
  
    
  };

  const moveCarousel = (direction) => {
    if (direction == "left" && decalage === 0) {
      setDecalage(-65);
    } else if (direction == "right" && decalage === -65) {
      setDecalage(0);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-3 sm:px-24 sm:py-12 w-full max-w-[1440px] mx-auto">
      <Toaster />
      <div className="flex flex-col items-center  max-w-screen-2xl w-full lg:h-[70vh] mb-12" style={{ backgroundImage: "url(" + BackgroundGrid.src + ")", backgroundSize: "cover" }}>
        <div className="flex flex-col max-w-screen-lg w-full">
          <div className="absolute w-[40vw] h-[40vw] rounded-full -top-[60vh] right-[15vw]" style={{ backgroundColor: "#92C4FE", zIndex: -1, filter: "blur(100px)" }}></div>
          <div className="absolute w-[50vw] h-[50vw] rounded-full -top-[20vh] left-[10vw]" style={{ backgroundColor: "#FEA49280", zIndex: -1, filter: "blur(100px)" }}></div>
          <motion.div
            initial={{ opacity: 0, bottom: 50, }}
            animate={{ opacity: 1, bottom: 0, }}
            transition={{ duration: 0.5 }} id="topBar" className="z-10 w-auto justify-between font-mono text-sm flex p-3 rounded-2xl" style={{ backgroundColor: "#282828" }}>
            <Image src={LogoBlanc} alt="logo" width={70} height={30} />
            <div className="flex flex-col justify-center items-center">
              <a className={dm_sans.className + " flex flex-row text-white"}><Image src={Twitter} alt="logo" width={30} height={30} />Follow us on Twitter</a>
            </div>
          </motion.div>
          <div className="flex flex-col items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, bottom: 20, }}
              animate={{ opacity: 1, bottom: 0, }}
              transition={{ duration: 0.5 }} className="relative px-4 py-2 my-10 rounded-full text-white flex flex-row" id="badgeIntro">
              Introducing a new online selling platform<Image className="ml-2 w-[20px]" src={Fete} alt="loogo fete" width={15} height={15} />
            </motion.div>
            <div className="flex flex-col items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, top: 20, }}
                animate={{ opacity: 1, top: 0, }}
                transition={{ duration: 0.5 }}
                className={`relative sm:text-6xl text-4xl font-bold text-center ${delaGothicOne.className}`}>
                Best way to sell<br /> your digital product
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, top: 20, }}
                animate={{ opacity: 1, top: 0, }}
                transition={{ duration: 0.5 }}
                className="relative text-lg my-10 text-gray-600 text-center w-2/3">
                Go from Zero to Hero with a simple platform that helps
                creators like you to sell their products online.
              </motion.p>
              <div className="flex flex-col md:flex-row gap-2 w-full justify-center mb-6">
                <motion.input
                  onChange={(e) => setEmail(e.target.value)}
                  initial={{ opacity: 0, right: 20, }}
                  animate={{ opacity: 1, right: 0, }}
                  transition={{ duration: 0.5 }}
                  className={"relative p-4 w-full md:w-1/2 rounded-lg placeholder-gray-700" + (errorMail ? " bg-red-200" : "")} placeholder="Your best email address" />
                <motion.button
                  initial={{ opacity: 0, left: 20, }}
                  animate={{ opacity: 1, left: 0, }}
                  transition={{ duration: 0.5 }}
                  onClick={handleClick} className="relative rounded-lg px-10 py-4" style={{ backgroundColor: "#314EE7", color: "#F5F5F5" }}>Try it out</motion.button>
              </div>
              {errorMail && <p className="text-red-500 text-sm relative bottom-3 w-[600px]">Please enter a valid email address</p>}
              <motion.div
                initial={{ opacity: 0, top: 20, }}
                animate={{ opacity: 1, top: 0, }}
                transition={{ duration: 0.5 }}
                className="flex flex-row">
                <div className="flex flex-row items-center relative md:left-[120px]">
                  <Image className="h-fit" src={"/profil1.png"} alt="avatar user profil" width={50} height={50} />
                  <Image className="relative h-fit right-[30px]" src={Profil2} alt="avatar user profil" width={50} height={50} />
                  <Image className="relative h-fit right-[60px]" src={Profil3} alt="avatar user profil" width={50} height={50} />
                  <Image className="relative h-fit right-[90px]" src={Profil4} alt="avatar user profil" width={50} height={50} />
                  <div className="w-[50px] h-[50px] relative right-[120px] rounded-full border-4 border-white bold flex items-center justify-center self-center font-semibold" style={{ backgroundColor: "#E7EAFF", color: "#314EE7" }}>100+</div>
                </div>
                <div className="ml-2"><span className="font-bold">More than 100+</span> users are selling their products<br /> online with simple & easy ways</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[60vw] md:w-[80vw] md:h-[50vh] w-full relative flex flex-row items-center justify-center mt-10">
        <div className="cursor-pointer hover:bg-slate-300 rounded-full mr-10 transition-all p-2" onClick={() => moveCarousel("left")} >
          <ChevronLeft size={50} color="black" />
        </div>
        <div className="flex flex-col items-center justify-center relative max-w-full">
          <div className="absolute  w-[250px] h-[250px] rounded-full" style={{ backgroundColor: "#AE92FE", zIndex: -1, filter: "blur(100px)" }}></div>
          <div className="absolute scale-[0.85] -top-[80px] md:w-[80vw] lg:w-[60vw] md:h-[300px] bg-white rounded-3xl shadow-lg opacity-60"></div>
          <div className="absolute scale-90 -top-[60px] md:w-[80vw] lg:w-[60vw] md:h-[300px] bg-white rounded-3xl shadow-lg opacity-70"></div>
          <div className="absolute scale-95 -top-[40px] md:w-[80vw] lg:w-[60vw] md:h-[300px] bg-white rounded-3xl shadow-lg opacity-80"></div>

          <div className="relative top-[0px] w-full flex flex-row rounded-3xl z-40 md:overflow-hidden lg:min-h-[300px] " id="carousel">

            <div className="w-full flex flex-col md:flex-row gap-12 p-10 md:overflow-auto pb-[40px] -mb-5 z-50 ">
              <div className="relative z-40 transition-all" style={{ transform: `translateX(${decalage}vh)` }}>
                <Image className="w-full h-fit md:w-[20vw] lg:min-h-[300px] lg:w-auto" src={Group1} alt="stats logiciel increase" width={300} height={200} style={{ maxWidth: "none" }} />
              </div>
              <div className="relative z-40 transition-all" style={{ transform: `translateX(${decalage}vh)` }}>
                <Image className="w-full h-fit md:w-[20vw] lg:min-h-[300px] lg:w-auto" src={Group2} alt="stats logiciel increase" width={300} height={200} style={{ maxWidth: "none" }} />
              </div>
              <div className="relative z-40 transition-all" style={{ transform: `translateX(${decalage}vh)` }}>
                <Image className="w-full h-fit md:w-[20vw] lg:min-h-[300px] lg:w-auto" src={Group3} alt="stats logiciel increase" width={300} height={200} style={{ maxWidth: "none" }} />
              </div>
            </div>

          </div>
        </div>
        <div className="cursor-pointer hover:bg-slate-300 rounded-full ml-10 p-3 transition-all" onClick={() => moveCarousel("right")}>
          <ChevronRight size={50} color="black" />
        </div>

      </div>
      <div className="lg:w-[60vw] md:w-[80vw]">
        <h2 className={delaGothicOne.className + " text-4xl font-bold my-10"}>Featuress</h2>
        <div className="flex flex-row gap-10 w-full ">
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-10 md:w-full lg:w-5/6">
            <div className="flex flex-row rounded-3xl w-full hover:bg-white hover:shadow-lg hover:scale-105 p-5">
              <div className="flex mr-6">
                <Image src={Money} alt="" width={80} height={80} style={{ maxWidth: "none" }} />
              </div>
              <div>
                <h3 className="my-4 text-xl font-bold">Save time & Reduce costs</h3>
                <p>Building your own online store, shopping cart, checkout, and licensing is time-consuming</p>
              </div>
            </div>
            <div className="flex flex-row rounded-3xl w-full hover:bg-white hover:shadow-lg hover:scale-105 p-5">
              <div className="flex mr-6">
                <Image src={Pastabox} alt="" width={80} height={80} style={{ maxWidth: "none" }} />
              </div>
              <div>
                <h3 className="my-4 text-xl font-bold">More features</h3>
                <p>We simplify all that by combining all of the features and solutions you need to sell</p>
              </div>
            </div>
            <div className="flex flex-row rounded-3xl w-full hover:bg-white hover:shadow-lg hover:scale-105 p-5">
              <div className="flex mr-6">
                <Image src={CoeurMain} alt="" width={80} height={80} style={{ maxWidth: "none" }} />
              </div>
              <div>
                <h3 className="my-4 text-xl font-bold">Sell your popular product more</h3>
                <p>Designed from the ground up to be easy to use and quick to set up for sellers</p>
              </div>
            </div>
            <div className="flex flex-row rounded-3xl w-full hover:bg-white hover:shadow-lg hover:scale-105 p-5">
              <div className="flex mr-6">
                <Image src={Globe} alt="" width={80} height={80} style={{ maxWidth: "none" }} />
              </div>
              <div>
                <h3 className="my-3 text-xl font-bold ">Sell it across the Globe</h3>
                <p className="text-gray-600">Expand into new global markets with ease when you automatically display popular pricing</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-row justify-center gap-10 bg-white rounded-3xl w-fit h-fit shadow-lg absolute right-28 p-6">
            <div className="flex flex-col">
              <p className="text-2xl">Try for free</p>
              <p className="text-sm text-gray-500">* No credit card required</p>
            </div>
            <motion.button
              whileHover={{ scale: [null, 1.2] }}
              transition={{ duration: 0.2 }}
              className="rounded-full w-[50px] h-[50px] text-white bg-blue-600 flex flex-row justify-center align-middle items-center">
              <Image src={ArrowRight} alt="" width={20} height={20} />
            </motion.button>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="lg:hidden w-full mt-10 flex flex-row justify-center gap-10 bg-white rounded-3xl h-fit shadow-lg  p-6">
            <div className="flex flex-col">
              <p className="text-2xl">Try for free</p>
              <p className="text-sm text-gray-500">* No credit card required</p>
            </div>
            <button className="rounded-full w-[50px] h-[50px] text-white bg-blue-600 flex flex-row justify-center align-middle items-center">
              <Image src={ArrowRight} alt="" width={20} height={20} /></button>
          </div>
        </div>
      </div>
      <div className="lg:w-[60vw] md:w-[80vw] mt-10 md:mt-0">
        <div className="flex flex-col bg-white rounded-3xl p-6 w-full shadow-sm mt-10 md:mt-16 md:py-16 items-center">
          <h3 className={delaGothicOne.className + " text-2xl md:text-4xl text-center "}>Be the first to know about new features, special offers, and more.</h3>
          <div className="flex flex-col md:flex-row gap-2 justify-center mb-6 w-full md:w-4/5 lg:w-4/5 my-10">
            <input className="p-4 w-full md:w-1/2 rounded-lg placeholder-gray-700" style={{ backgroundColor: "#F7F7F7" }} color="#00000080" placeholder="Your best email address" />
            <button onClick={handleClick} className="rounded-lg px-10 py-4" style={{ backgroundColor: "#314EE7", color: "#F5F5F5" }}>Join waitlist</button>
          </div>
        </div>
      </div>
      <div className="lg:w-[60vw] md:w-[80vw] mt-20">
        <div className="flex flex-row justify-between">
          <Image src={LogoNoir} alt="avatar user profil" width={70} height={30} style={{ maxWidth: "none" }} />
          <nav className="flex flex-row gap-3 font-semibold">
            <Link className="hover:underline" href={'#'}>Home</Link>
            <Link className="hover:underline" href={'#'}>Agencies</Link>
            <Link className="hover:underline" href={'#'}>About</Link>
            <Link className="hover:underline" href={'#'}>My ShortList</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
