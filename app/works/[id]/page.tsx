"use client";
import React, { useEffect, useRef, useState } from "react";
import RowSlide from "@/components/RowSlide";
import Image from "next/image";
import Link from "next/link";
import { easeIn, motion, useInView } from "framer-motion";

const PortfoliosList = {
  CorporatePortfolio_1: {
    title: "コーポレートサイト",
    range: "デザイン・コーディング",
    period: "1ヶ月",
    url: "https://drivendesignduo.com",
    images: [
      "Portfolio/CorporatePortfolio_1/mix.jpg",
      "Portfolio/CorporatePortfolio_1/desktop.jpg",
      "Portfolio/CorporatePortfolio_1/mobile.jpg",
    ],
  },
};

const portfolios = ["CorporatePortfolio_1"];

export async function generateStaticParams() {
  return portfolios.map((portfolio) => ({
    id: portfolio,
  }));
}

const variants = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  whileInView: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 3,
    },
  },
};

export default async function Page({ params }) {
  const { id: portfolio } = params;
  const PortfolioItem = PortfoliosList[portfolio];
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    // Check for window object
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!windowWidth) return null;
  const isLargeScreen = windowWidth >= 1024;
  const initialProps = isLargeScreen
    ? { clipPath: "inset(0 100% 0 0)" }
    : { clipPath: "inset(0 0 100% 0)" };
  return (
    <RowSlide className="">
      <section className="h-full flex flex-col justify-center lg:px-40 max-lg:w-full max-lg:py-40">
        <h1 className="text-h3 font-mont text-secondary font-semibold text-center whitespace-nowrap">
          {PortfolioItem.title}
        </h1>
        <div className="flex flex-col items-start mt-10 whitespace-nowrap max-lg:px-10">
          <div>担当範囲 : {PortfolioItem.range}</div>
          <div className="my-[1em]">制作期間 : {PortfolioItem.period}</div>
          <div>URL : {PortfolioItem.url}</div>
        </div>
      </section>
      <section className="h-full flex items-center lg:w-fit bg-stone-100 max-lg:flex-col lg:px-40 max-lg:w-full max-lg:py-10">
        <motion.div
          className="h-1/2 lg:aspect-[3/1] relative max-lg:aspect-[2/3] lg:border-r border-separate max-lg:border-b max-lg:w-full"
          initial={initialProps}
          whileInView={{ clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.5, 0, 1, 1] }}
        >
          <Image
            src={"/Portfolio/CorporatePortfolio_1/mockups.png"}
            alt={"mockup img"}
            fill
            className="object-contain object-center"
          />
        </motion.div>
        <motion.div
          className="h-2/3 aspect-video relative lg:border-r border-separate max-lg:border-b max-lg:w-full"
          initial={initialProps}
          whileInView={{ clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.5, 0, 1, 1] }}
        >
          <Image
            src={"/Portfolio/CorporatePortfolio_1/desktop.png"}
            alt={"desktop img"}
            fill
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div
          className="h-2/3 aspect-[195/422] relative max-lg:w-full"
          initial={initialProps}
          whileInView={{ clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.5, 0, 1, 1] }}
        >
          <Image
            src={"/Portfolio/CorporatePortfolio_1/mobile.png"}
            alt={"mobile img"}
            fill
            className="object-contain object-center"
          />
        </motion.div>
      </section>
      <section className="h-full flex flex-col items-center justify-center lg:px-40 space-y-[1em] text-h5 max-lg:py-40">
        {portfolios.map((port) => (
          <Link
            key={port}
            href={"/works/" + port}
            className={`${port === portfolio ? "text-secondary" : ""}`}
          >
            {port}
          </Link>
        ))}
      </section>
    </RowSlide>
  );
}