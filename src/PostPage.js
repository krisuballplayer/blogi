import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams(); //napaa ID:een tässä tapauksessa. kuluu react-router-dom--kirjastoon.
  const post = posts.find((post) => post.id.toString() === id); //muuttaa stringiksi
  return (
    <main className="PostPage">
      <article className="post">
        {post && ( //tarkastaa onko mitään poistettavaa, eli onko ns. True
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Poista</button>
          </>
        )}
        {!post && (
          <>
            <h2>Postausta ei löydy.</h2>
            <p>
              s<Link to="/">Kotia</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
