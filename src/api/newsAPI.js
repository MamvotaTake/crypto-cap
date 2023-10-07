const host = "http://localhost:8000/news";

const newsAPI = {
    async fetchAll() {
        const result = await fetch(host, { method: 'GET' })
        return result.json()
    }
}