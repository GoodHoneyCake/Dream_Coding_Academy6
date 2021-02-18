import axios from "axios";

export default class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: `https://youtube.googleapis.com/youtube/v3`,
      params: { key: key },
    });
  }
  async mostPopular() {
    try {
      const response = await fetch(
        `/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log("error", error);
    }
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
