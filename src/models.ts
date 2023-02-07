export interface IAuthor {
  _id: string,
  email: string,
  firstName: string,
  lastName: string,
  subscriptions: string[]
};

export interface NewAuthor {
  firstName: string,
  lastName: string
}

export interface INewMessage {
  message: string
}

export interface IEmail {
  email: string
}

export interface IMessage {
  _id: string,
  datetime: string,
  user?: IAuthor,
  userId: string,
  message: string
}