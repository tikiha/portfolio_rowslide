"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactConfirm from "./ContactConfirm";
import ContactSuccess from "./ContactSuccess";
import { ChevronUp, Home } from "lucide-react";
import FooterY from "@/components/FooterY";

const Page = () => {
  const [formData, setFormData] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <main className="flex flex-col items-center w-screen h-full bg-light mt-16">
      <div className="flex-shrink-0 w-full h-[66vh] relative max-lg:h-[33vh]">
        <h1 className="font-mont absolute left-1/2 top-1/2 text-light font-bold text-4xl z-10 -translate-x-1/2 -translate-y-1/2">
          Contact
        </h1>
        <Image
          src={"/Pic/ContactHome.png"}
          fill
          alt={"ConatctHome Pic"}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="flex-shrink-0 flex items-center py-6 text-dark mx-auto xl:w-[1280px] w-full px-4">
        <Home size={16} />
        <span className="mx-2">{">"}</span>
        <span className="font-mont text-primary underline">Contact</span>
      </div>
      <span className="border-t w-full mb-16" />

      <div className="flex mx-auto lg:w-[1024px] w-full px-16 mb-5 h-fit text-lg max-lg:text-base max-lg:px-10">
        <div className="w-1/3 flex flex-col items-center aspect-[3/1] ">
          <div
            className={`w-full  h-full rounded-tr-full rounded-xl flex items-center justify-center ${
              step === 1 ? "bg-slate-400/50 font-bold" : "bg-slate-200/50"
            }`}
          >
            1
          </div>
          <h2 className={`mt-2 ${step === 1 ? "font-bold" : ""}`}>入力</h2>
        </div>
        <div className="w-1/3 flex flex-col items-center mx-4">
          <div
            className={`w-full  h-full rounded-tr-full rounded-xl flex items-center justify-center ${
              step === 2 ? "bg-slate-400/50 font-bold" : "bg-slate-200/50"
            }`}
          >
            2
          </div>
          <h2 className={`mt-2 ${step === 2 ? "font-bold" : ""}`}>確認</h2>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div
            className={`w-full  h-full rounded-tr-full rounded-xl flex items-center justify-center text-lg ${
              step === 3 ? "bg-slate-400/50 font-bold" : "bg-slate-200/50"
            }`}
          >
            3
          </div>
          <h2 className={`mt-2 text-lg ${step === 3 ? "font-bold" : ""}`}>
            終了
          </h2>
        </div>
      </div>

      {step === 1 ? (
        <ContactForm setFormData={setFormData} setStep={setStep} />
      ) : step === 2 ? (
        <ContactConfirm formData={formData} setStep={setStep} />
      ) : step === 3 ? (
        <ContactSuccess setStep={setStep} />
      ) : null}

      <FooterY />
    </main>
  );
};

export default Page;
