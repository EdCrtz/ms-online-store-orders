class User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: Orders[];
  articles?: Article[];

  constructor(
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    createdAt?: Date,
    updatedAt?: Date,
    orders?: Orders[],
    articles?: Article[],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.orders = orders;
    this.articles = articles;
  }
}

class Article {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: User;
  userId?: string;

  constructor(
    id?: string,
    name?: string,
    description?: string,
    price?: number,
    image?: string,
    createdAt?: Date,
    updatedAt?: Date,
    user?: User,
    userId?: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.user = user;
    this.userId = userId;
  }
}

export class Orders {
  id: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  articleId: string;

  constructor(
    id?: string,
    total?: number,
    createdAt?: Date,
    updatedAt?: Date,
    userId?: string,
    articleId?: string,
  ) {
    this.id = id;
    this.total = total;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
    this.articleId = articleId;
  }
}
