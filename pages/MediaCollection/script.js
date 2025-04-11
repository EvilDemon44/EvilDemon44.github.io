class VideoGame {
    #price;
  
    constructor(title, platform, price, releaseYear, image) {
      this.title = title;
      this.platform = platform;
      this.setPrice(price);
      this.releaseYear = releaseYear;
      this.image = image;
    }
  
    getPrice() {
      return this.#price;
    }
  
    setPrice(newPrice) {
      if (newPrice < 0) {
        throw new Error("Price cannot be negative.");
      }
      this.#price = newPrice;
    }
  
    getTitle() {
      return this.title;
    }
  
    setTitle(newTitle) {
      if (newTitle.length > 35) {
        throw new Error("Title must be 35 characters or less.");
      }
      this.title = newTitle;
    }
  
    toString() {
      return `${this.title} (${this.platform}, ${this.releaseYear}) - $${this.#price.toFixed(2)}`;
    }
  
  
    toHTMLElement() {
      const game = document.createElement("div");
      game.className = "game-card";
  
      const img = document.createElement("img");
      img.src = this.image;
      img.alt = this.title;
  
      const title = document.createElement("h3");
      title.textContent = this.title;
  
      const platform = document.createElement("p");
      platform.textContent = `Platform: ${this.platform}`;
  
      const year = document.createElement("p");
      year.textContent = `Year: ${this.releaseYear}`;
  
      const price = document.createElement("p");
      price.textContent = `Price: $${this.#price.toFixed(2)}`;
  
      game.appendChild(img);
      game.appendChild(title);
      game.appendChild(platform);
      game.appendChild(year);
      game.appendChild(price);
  
      return game;
    }
  }
  
  
  const jsonData = `
  [
    {
      "title": "The Legend of Zelda: Breath of the Wild",
      "platform": "Nintendo Switch",
      "price": 59.99,
      "releaseYear": 2017,
      "image": "images/BotW.jpg"
    },
    {
      "title": "God of War Ragnarök",
      "platform": "PlayStation 5",
      "price": 69.99,
      "releaseYear": 2022,
      "image": "images/GOWR.jpg"
    },
    {
      "title": "Elden Ring",
      "platform": "PS5",
      "price": 59.99,
      "releaseYear": 2022,
      "image": "images/ER.png"
    },
    {
      "title": "Fallout New Vegas",
      "platform": "Xbox 360",
      "price": 9.99,
      "releaseYear": 2010,
      "image": "images/FONV.jpg"
    },
    {
      "title": "Fallout 4",
      "platform": "xbox one",
      "price": 19.99,
      "releaseYear": 2015,
      "image": "images/F4.jpg"
    },
    {
      "title": "Skyrim",
      "platform": "Xbox 360",
      "price": 19.99,
      "releaseYear": 2017,
      "image": "images/S.jpg"
    },
    {
      "title": "Age of Mythology",
      "platform": "PC",
      "price": 19.99,
      "releaseYear": 2002,
      "image": "images/AoM.jpg"
    }
  ]
  `;
  
  
  const gameData = JSON.parse(jsonData);
  const games = gameData.map(
    game => new VideoGame(game.title, game.platform, game.price, game.releaseYear, game.image)
  );
  
  
  window.onload = () => {
    const mediaContainer = document.getElementById("media-container");
    games.forEach(game => {
      const gameElement = game.toHTMLElement();
      mediaContainer.appendChild(gameElement);
    });
  };
  