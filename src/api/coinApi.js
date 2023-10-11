const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en";
// const host = "http://localhost:8000/coins";
const coinApi = {
    async fetchAll() {
    const result = await fetch(`${API_URL}`, { method: "GET" });
    return result.json();
  }
}

export default coinApi;