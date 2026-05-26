import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getPosts, getNews } from "../services/api";

interface Post {
  id: number;
  title: string;
  content?: string;
}

interface NewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export default function RenderPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResult, newsResult] = await Promise.all([
          getPosts(),
          getNews()
        ]);
        
        if (postsResult) {
          setPosts(postsResult);
        }
        if (newsResult?.articles) {
          setNews(newsResult.articles);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div className="posts-container">
          <div className="card">
            <h1>Carregando...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="posts-container">
        <h1>Posts</h1>
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="card post-item">
              <span className="post-title">{post.title}</span>
              <Link to={`/post/${post.id}`} className="link post-link">Ver detalhes</Link>
            </div>
          ))}
        </div>

        <h1 className="news-section-title">Notícias</h1>
        <div className="posts-list">
          {news.map((article, index) => (
            <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className="card post-item news-item">
              <div className="news-item-content">
                <span className="post-title">{article.title}</span>
                {article.description && (
                  <p className="news-item-description">
                    {article.description}
                  </p>
                )}
                <span className="news-item-source">
                  Fonte: {article.source.name}
                </span>
              </div>
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="news-item-image"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
