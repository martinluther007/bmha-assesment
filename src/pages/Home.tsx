import { useState } from "react";
import Paginate from "../components/Paginate";
import PhotoCard from "../components/PhotoCard";
import LoadingSpinner from "../components/Spinner";
import useFetch from "../useFetch";
const Home = () => { 
const {data, isLoading} = useFetch(`https://jsonplaceholder.typicode.com/photos`)
const [currentPage, setCurrentPage] = useState(1)
const [numPerPage] = useState(18)

const indexOfLastPost = currentPage * numPerPage
const indexOfFirstPost = indexOfLastPost - numPerPage
const currentPost = data.slice(indexOfFirstPost,indexOfLastPost)
// change page
const paginate = (pageNumber:number) => {
  setCurrentPage(pageNumber)
}
  return (
    <main>
      <header className="header">
        <h2>bmha assessment </h2>
        <h2>page: {currentPage}</h2>
      </header>
      <section className="card-display">
      {isLoading? <LoadingSpinner/> : currentPost.map(photo =>  <PhotoCard {...photo} key={photo.id}/> )}
      </section>
      <Paginate postsPerPage={numPerPage} totalPosts={data.length} paginate={paginate}/>
    </main>
  );
};

export default Home;
