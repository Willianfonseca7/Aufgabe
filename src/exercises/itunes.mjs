export default async function searchItunes(term, media = "music") {
    const baseUrl = "https://itunes.apple.com/search";
  
    const url = new URL(baseUrl);
    url.searchParams.set("term", term);
    url.searchParams.set("media", media);
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("Fehler bei der Anfrage an iTunes API");
    }
  
    const data = await response.json();
    return data;
  }
  