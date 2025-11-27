import searchItunes from "./itunes.mjs";

async function testItunes() {
  try {
    const result1 = await searchItunes("Metallica");
    console.log("Metallica:", result1);

    const result2 = await searchItunes("Batman", "movie");
    console.log("Batman Filme:", result2);

  } catch (error) {
    console.error("Fehler:", error.message);
  }
}

testItunes();
