export type Image = {
  url: string;
  width: number;
  height: number;
};

export type Artist = {
  name: string;
  id: string;
  images: Image[];
};
