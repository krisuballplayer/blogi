import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? ( //tarkastaa onko yhtään postausta, jos totta siirtyy Feediin
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Ei löydy postauksia.</p> //jos ei
      )}
    </main>
  );
};

export default Home;
