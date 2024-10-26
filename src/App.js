import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1. postaus",
      datetime: "October 23, 2024 13:27:11 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "2. postaus",
      datetime: "October 23, 2024 13:27:11 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "3. postaus",
      datetime: "October 23, 2024 13:27:11 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "4. postaus",
      datetime: "October 23, 2024 13:27:11 PM",
      body: "Zorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //aktivoituu, jos muutoksia posts & search
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) || //etsii "bodysta" yhtäläsisyyksiä
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse()); //järjestää postaukset uusimmasta vanhempaan
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault(); //estää default toiminnon, eli lähetyksen
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1; //tarkastaa onko vielä yhtään postausta
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost]; //uusi AllPosts
    setPosts(allPosts);
    setPostTitle(""); //tyhjentää
    setPostBody(""); //tyhjentää
    navigate("/"); //menee automaattisesti kotisivulle. löytyy react-router-dom-kirjastosta.
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id); //filtteröi läpi posts ja "poistaa" id:en jonka saanut propsina
    setPosts(postsList); //tekee uuden listan
    navigate("/"); //menee automaattisesti kotisivulle. löytyy react-router-dom-kirjastosta.
  };

  return (
    //eri komponenteilla routing sääntöjä ja lähetettäviä propseja näille
    <div className="App">
      <Header title="Blogi" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />} />
        <Route
          exact
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
