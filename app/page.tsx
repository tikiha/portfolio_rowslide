import classes from "../styles/home.module.scss";
import Link from "next/link";

async function Page() {
  return (
    <div className="w-screen flex flex-col">
      <Link href={"/blog"} className="mt-10 bg-slate-500 p-2 rounded-lg w-fit">
        microcms blog test→
      </Link>

      <Link href={"/svg"} className="mt-10 bg-slate-500 p-2 rounded-lg w-fit">
        svg カスタマイズ→
      </Link>
    </div>
  );
}

export default Page;
