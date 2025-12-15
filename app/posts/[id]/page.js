import getPost from "@/lib/getPost";

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  console.log(post);
  return (
    <div className="mt-6">
      <h2 className="text-blue-500"> {post.title} </h2>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}
