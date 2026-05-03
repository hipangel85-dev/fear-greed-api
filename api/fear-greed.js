export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
      const response = await fetch(
        'https://api.alternative.me/fng/?limit=1',
        {
          headers: {
            'User-Agent': 'Mozilla/5.0'
          }
        }
      );
      const data = await response.json();
      const latest = data.data[0];
      
      res.status(200).json({
        value: parseInt(latest.value),
        classification: latest.value_classification,
      });
    } catch (error) {
      res.status(500).json({ error: '데이터를 가져오지 못했어요' });
    }
}