"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import {MenuInterface} from "@/src/helper/dataFormat";
import { logoConstant } from "@/src/helper/constantData";
import FireLogo from "./logoAnimation/FireLogo";

//Variants cho Drawer Animation (Mở từ trái sang phải)
const drawerVariants: Variants = {
  initial: { x: "-100%" }, // Nằm ngoài màn hình bên trái
  animate: { 
    x: 0, 
    transition: { type: "tween", duration: 0.4, ease: "easeOut" } 
  },
  exit: { 
    x: "-100%",
    transition: { type: "tween", duration: 0.3, ease: "easeIn" } 
  },
};

// Variants cho Backdrop
const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Navbar({ data }: { data: MenuInterface[] }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // 3. Xử lý logic check Desktop/Mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992); // lg breakpoint của Bootstrap
      if (window.innerWidth >= 992) setIsDrawerOpen(false); // Đóng drawer nếu mở desktop
    };
    handleResize(); // Chạy khi component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <div className={`d-flex justify-content-between align-items-center ${!isDesktop ? 'overflow-hidden' : ''}`} style={{ height: '66px' }}>

        {!isDesktop && (
          <div onClick={toggleDrawer} className="p-2">
            <FontAwesomeIcon 
              icon={isDrawerOpen ? faXmark : faBars}
              className="fs-1 text-white" 
            />
          </div>
        )}

        <FireLogo/>

        {isDesktop && (
          <ul className="d-flex h-100 align-items-center m-0 p-0 list-unstyled gap-4 fw-bold fs-5">
            {data.map((menu) => (
              <li key={menu.name}>
                <Link href={menu.link} className="nav-link text-decoration-none p-2 text-nowrap">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop (Lớp phủ đen mờ) */}
            <motion.div
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="drawer-backdrop z-4 vh-100 vw-100 fixed-top"
              onClick={toggleDrawer} // Đóng drawer khi click backdrop
            />

            {/* Drawer Panel */}
            <motion.div
              variants={drawerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="drawer-panel z-5 vh-100 fixed-top bg-white shadow-lg p-0"
              style={{ width: "280px" }} // Độ rộng drawer
            >
              <div className="d-flex flex-column h-100 p-0 m-0 w-100">
                {/* Drawer Header (Logo + Nút Đóng) */}
                <div className="drawer-header px-3 py-2 border-bottom d-flex justify-content-between align-items-center w-100">
                  <Image 
                    src={logoConstant.src} 
                    alt={logoConstant.alt} 
                    width={logoConstant.width} 
                    height={logoConstant.height} 
                    className="rounded-circle"
                  />
                  <button 
                    onClick={toggleDrawer} 
                    className="btn-close fs-4" 
                    aria-label="Close"
                  >
                    <FontAwesomeIcon 
                      icon={faXmark} 
                      className="fs-2 text-dark" 
                    />
                  </button>
                </div>

                {/* Drawer Body (Menu Items - Thêm accordion sau nếu cần) */}
                <ul className="list-unstyled">
                  {data.map((menu) => (
                    <li key={menu.name} className="drawer-item p-0 m-0 w-100 border-bottom">
                      <Link href={menu.link} className="d-block px-4 py-3 text-black text-decoration-none fw-bold fs-5">
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}