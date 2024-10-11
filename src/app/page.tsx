import Banner from "@/components/shared/Banner";
import NewsLetter from "@/components/shared/NewsLetter";
import { Button } from "@/components/ui/button";
import Newsitem from "@/types/newstypes";
import Image from "next/image";
import Link from "next/link";

const Home = async()=> {
  let data = await fetch("https://news-api-next-js-kappa.vercel.app/api/news")
  let news = await data.json()
  console.log(news)

  return (
    <>
      <main className="py-12">
      <Banner />
      <div className="my-12">
        <p className="text-xl font-bold">Latest All News</p>
        <div className="grid md:grid-cols-3 gap-3">
          {
            news.slice(0,3).map((allnews:Newsitem,idx:any)=>(
             <Link href={`/news/${allnews._id}`} className="p-3 border shadow-xl space-y-4 shadow-slate-100 gap-3">
              <Image width={440} height={250} src={allnews.imageUrl} alt="card image" className="h-56 w-full object-container rounded-md" />
              <div className="space-y-2">
                <h1 className="text-xl font-bold text-slate-900">{allnews.title}</h1>
                <p className="mt-2 text-base tracking-tight">{allnews.description}</p>
                <Button variant="default">read more</Button>
              </div>
             </Link>
            ))
          }
        </div>
        <div className="my-12">
          <NewsLetter />
        </div>

      </div>
      </main>
    
    </>
  );
}
export default Home;