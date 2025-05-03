export default async function handler(req, res) {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    const apiRes = await fetch(`https://api.consumet.org/anime/gogoanime/${encodeURIComponent(query)}`);
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API request failed" });
  }
}
