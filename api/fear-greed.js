export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
      const response = await fetch(
        'https://production.dataviz.cnn.io/index/fearandgreed/graphdata'
      );
      const data = await response.json();
      
      const latest = data.fear_and_greed;
      
      res.status(200).json({
        value: Math.round(latest.score),
        classification: latest.rating,
      });
    } catch (error) {
      res.status(500).json({ error: '데이터를 가져오지 못했어요' });
    }
}