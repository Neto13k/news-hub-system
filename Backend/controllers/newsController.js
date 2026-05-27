async function getNews(req, res) {
  try {
    const apiKey = process.env.GNEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Chave da API não configurada' });
    }

    const url = new URL('https://gnews.io/api/v4/top-headlines');
    url.searchParams.append('lang', 'pt');
    url.searchParams.append('country', 'br');
    url.searchParams.append('token', process.env.GNEWS_API_KEY);

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
