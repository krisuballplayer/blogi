import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} /> //käy läpi postaukset.lähettää ne Postiin.
      ))}
    </>
  );
};

export default Feed;
