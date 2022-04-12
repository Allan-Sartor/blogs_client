import { useState } from "react";
import { Articles } from "../components/Articles/Articles";
import { Header } from "../components/Header/Header";

const Home = () => {
  const [isOpenNewArticleModalOpen, setIsOpenNewArticleModalOpen] = useState(false);

  function handleOpenNewArticleModal() {
    setIsOpenNewArticleModalOpen(true);
  }

  function handleCloseNewArticleModal() {
    setIsOpenNewArticleModalOpen(false);
  }

  return (
    <>
      <Header
        openModal={handleOpenNewArticleModal}
        closeModal={handleCloseNewArticleModal}
        isOpen={isOpenNewArticleModalOpen}
      />
      <Articles />
    </> 
  )
} 

export default Home;
