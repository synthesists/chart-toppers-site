export type Image = {
  url: string;
};

export type Artist = {
  name: string;
  id: string;
  image: Image | null;
};
