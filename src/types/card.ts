
export interface CardInterface {
  id: string,
  image: {
    src: string,
    alt: string,
  }
  title: string,
  description?: string,
}