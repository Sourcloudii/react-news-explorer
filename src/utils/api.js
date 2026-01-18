export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getItems() {
  return new Promise((resolve) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        owner: "fakeid",
        author: "Verge Staff",
        content:
          "Every week at The Verge, were tracking whats happening with Trump Mobiles promised and yet undelivered Android phone. Why? Because we cover phones. We also cover vaporware, which the T1 Phone 8002 (g… [+3568 chars]",
        description:
          "Every week at The Verge, we’re tracking what’s happening with Trump Mobile’s promised and yet undelivered Android phone. Why? Because we cover phones. We also cover vaporware, which the T1 Phone 8002 (gold version) very well may be. The smartphone has now bee…",
        keyword: "Android",
        publishedAt: "2025-12-12T15:39:59Z",
        source: { id: "the-verge", name: "The Verge" },
        title: "We’re still talking about the Trump phone",
        url: "https://www.theverge.com/gadgets/843498/trump-phone",
        urlToImage:
          "https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/t1-phone-trump.jpg?quality=90&strip=all&crop=0,1.7328436659964,100,78.534031413613",
      },
    ])
  ).catch(checkResponse);
}

export function saveArticle(article, userId) {
  return new Promise((resolve) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      owner: userId,
      keyword: article.keyword,
      url: article.url,
      title: article.title,
      imageUrl: article.urlToImage,
      content: article.content,
      source: article.source.name,
    });
  }).catch(checkResponse);
}
