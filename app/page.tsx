"use client";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import officePic from "./../public/officePic.jpg";
import HomeCarousel from "@/components/HomeCarousel";
import { HomeCarouselFramer } from "@/components/HomeCarouselFramer";
import Works from "@/components/Works";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex w-full h-[calc(100vh-12px)] pt-16 ">
      <HomeCarousel />

      <div className="flex-shrink-0 h-full w-1/3 flex items-center justify-center px-10 bg-light">
        <p className="text-base">
          静的サイトからCMS導入どの後の運用まで。 Webに関する知識がない方に
          「優しい」Webサイトをお届けいたします。
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-1/2 flex items-center justify-center relative">
        <h1 className="z-10 text-4xl text-light font-semibold ">About US</h1>
        <Image
          src="/Pic/About.png"
          fill
          alt={"About Pic"}
          className="h-full object-cover object-left"
        />
      </div>
      <div className="flex-shrink-0 h-full w-1/2 flex flex-col items-center justify-center px-10 bg-light">
        <p className="text-2xl font-bold">
          「優しい」を届ける。
          <br />
          それが私たちの使命です。
        </p>
        <p className="text-base">
          小さな組織だからできる、細やかで迅速なサポート
          <br />
          お客様へ寄り添い、不安や悩みの解決をお手伝いいたします。
        </p>
      </div>
      <Works
        title={"LP制作"}
        src={"/Pic/LP.png"}
        paragraph={
          "一枚簡潔の広告・宣伝に特化したWebページ制作です。お問い合わせに繋がる設計をいたします。ご希望に沿って、ランディングページへの流入手段からご案内もいたします。"
        }
        button={"1ページ完結:300,000円～"}
        ps={
          "どのような構成にするか一緒に確認できたらと思いますので、お気軽にご相談ください。"
        }
      />
      <Works
        title={"ホームページ制作"}
        src={"/Pic/HP.png"}
        paragraph={
          "会社・店舗の顔となるホームページ制作です。制作目的・ご予算・ご希望のデザインなど、ヒアリングを行ったうえで、最善のご提案をいたします。"
        }
        button={"5ページ～:500,000円～"}
        ps={
          "どのようなページ構成にするか一緒に確認できたらと思いますので、お気軽にご相談ください。"
        }
      />
      <Works
        title={"ECサイト構築"}
        src={"/Pic/EC.png"}
        paragraph={
          "自社商品を販売できるECサイトをShopifyにて構築いたします。構築するだけでなく、実際にどのような発送手続きを行うのか等の運用の部分までお手伝いいたします。"
        }
        button={"5ページ～:500,000円～"}
        ps={
          "アプリ導入やページ構成について一緒に確認出来たらと思いますので、お気軽にご相談ください。"
        }
      />

      <div className="flex-shrink-0 h-full w-1/3 flex flex-col items-center justify-center bg-blue-400 text-light p-10">
        <h1 className="text-4xl font-bold mb-10">Works</h1>
        <p>
          Webサイトに訪れたユーザー目線で、ユーザビリティの高いサイト制作を行います。ブログ投稿機能、プラグインを用いてご希望に応じたカスタマイズをいたします。
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/3" />

      <div className="flex-shrink-0 h-full w-1/3 flex items-center justify-center px-10 bg-light">
        <p className="text-base">
          静的サイトからCMS導入どの後の運用まで。 Webに関する知識がない方に
          「優しい」Webサイトをお届けいたします。
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/2 flex items-center justify-center relative">
        <h1 className="z-10 text-4xl text-light font-semibold ">Contact</h1>
        <Image
          src="/Pic/Contact.png"
          fill
          alt={"Contact Pic"}
          className="h-full object-cover object-center"
        />
      </div>

      <div className="flex-shrink-0 flex flex-col h-full w-1/2 bg-light">
        <div className="h-1/2 flex flex-col items-center justify-center p-10">
          <h2>ご意見をお聞かせください</h2>
          <p>
            ホームページ制作やリニューアルのご依頼・ご相談はこちらからお問い合わせください。些細なことでも構いません。お気軽にご相談ください。
          </p>
          <Link className="bg-green-300" href={"/contact"}>
            お問い合わせへ
          </Link>
        </div>
        <div className="h-1/2 w-full relative">
          <Image
            src="/Pic/Consul.png"
            fill
            alt={"Consul Pic"}
            className="w-full object-cover object-center"
          />
        </div>
      </div>
      <Footer />
      <Image
        src={officePic}
        alt={"office"}
        className="fixed w-screen h-full -z-50"
      />
    </main>
  );
};

export default Page;
