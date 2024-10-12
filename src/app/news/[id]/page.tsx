import Newsitem from "@/types/newstypes";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
    const posts: Newsitem[] = await fetch('https://news-api-next-js-kappa.vercel.app/api/news').then((res) =>
      res.json()
    )
    return posts.map((post) => ({
      id: String(post._id),
    }))
  }

const NewsDetailsPage = async ({ params }: { params: { _id: string } }) => {
    const post = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news/${params.id}`).then(
        (res) => res.json()
      )
  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto rounded-lg border shadow-md p-6">
       {post?.imageUrl && (
        <div>
            <Image src={post.imageUrl} alt="..." width={800} height={450} className="rounded-md object-cover" />

        
        </div>
       )}

       <div className="my-6">
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <div className="flex justify-between items-center text-sm mb-4">
          <p>{new Date(post?.published_at).toDateString()}</p>
          <p>
            Source: <span>{post?.source}</span>
          </p>
          </div>
       </div>
       <div className="mb-4">
        {post?.categories?.map((category:string)=>(
            <span
            key={category}
            className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                
               {category} 
            </span>
        ))}
       </div>
       <p className="mb-2">{post?.snnipet}</p>
       <p className="mb-4">{post?.description}</p>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius officiis earum distinctio, a neque culpa facere aliquid! Dolore recusandae ducimus sint officia deserunt molestiae accusamus asperiores optio cumque, quidem voluptatum minima iste maxime omnis dignissimos aperiam, esse hic nulla cupiditate ipsa, cum ipsum tempore qui? Explicabo alias quo libero blanditiis dignissimos odit, dolore ratione? Perferendis exercitationem at eaque, quia in ipsam eos atque fugiat, tenetur quod voluptates autem maxime maiores soluta nesciunt ex nobis vel? Debitis sed beatae odit error quia natus doloribus eveniet. Quis nemo itaque at consequuntur numquam, nam et nobis aut! Atque quo saepe nemo ipsam ipsa vitae veritatis nisi quia in aliquam repellendus mollitia laboriosam earum aliquid consectetur dolores perspiciatis, corporis illum laudantium laborum molestiae. Nesciunt iste animi, cumque, non doloribus suscipit quaerat hic corrupti, ex tenetur consequuntur sit ea distinctio. Dolorem corporis quaerat maxime. Deleniti hic non autem soluta tempora nisi eligendi. Qui odio aliquid magnam, ab molestias quam doloribus perspiciatis atque vero quasi quae fugit rem maxime quas voluptate exercitationem ad maiores officiis reiciendis harum! Quia, explicabo deserunt! Asperiores, vero porro eos expedita corporis illum dicta perferendis, unde laudantium excepturi, distinctio eius maxime est laborum eligendi reiciendis totam ducimus aperiam consequatur? Culpa, dolores et commodi aperiam adipisci facere architecto repudiandae deserunt! Numquam fugit impedit fugiat rerum quam, voluptatum culpa maxime exercitationem recusandae aspernatur dolores adipisci a sint, accusamus optio debitis deserunt, voluptatibus iste atque temporibus. Reprehenderit praesentium assumenda dignissimos nobis explicabo, eius unde quod delectus cumque autem soluta suscipit dolorum expedita iusto perferendis id facere nostrum, atque repellendus eos voluptate deserunt? Adipisci, delectus atque distinctio saepe dolorum id. Laudantium animi corporis veritatis ratione minus sunt neque nulla, pariatur quos nam tempora quasi possimus facere illum suscipit dignissimos ex fugit laborum atque? Placeat magnam velit sit vitae aspernatur enim voluptate obcaecati, minus blanditiis dolorem.</p>
      </article>
    </section>
  )
}

export default NewsDetailsPage
