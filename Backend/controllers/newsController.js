async function getNews(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Chave da API não configurada' });
    }

    const url = new URL('https://newsapi.org/v2/top-headlines');
    url.searchParams.append('country', 'br');
    url.searchParams.append('apiKey', apiKey);
    url.searchParams.append('pageSize', '10');

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro da NewsAPI:', errorData);
      return res.status(response.status).json({ error: 'Erro ao buscar notícias da API' });
    }

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error.message);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { getNews };
