import { ArticleShow } from "../components/Articles/Show/ArticleShow";
import { Header } from "../components/Header/Header";
import { ArticleProvider } from "../contexts/ArticleContext";

export default function ViewArticle() {
  return (
    <ArticleProvider>
      <Header />
      <ArticleShow />
    </ArticleProvider > 
  )
} 

