export interface Track {
  id: string;
  name: string;
  previewUrl: string | null;
  artistIds: string[];
  albumId: string;
}
