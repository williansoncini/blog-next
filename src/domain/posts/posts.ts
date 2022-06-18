export type PostData = {
  id: number;
  attributes: PostAttributes;
};

export type PostAttributes = {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updateAt: string;
  publishedAt: string;
};
