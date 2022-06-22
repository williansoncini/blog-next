export type PostData = {
  id: number;
  attributes: PostAttributes;
};

export type PostAuthorData = {
  data: PostAuthorAttributes;
};

export type PostAuthorAttributes = {
  id: number;
  attributes: PostAuthor;
};

export type PostAuthor = {
  id: number;
  name: string;
  createdBy: number;
  updatedBy: number;
  createdAt: string;
  updated_at: string;
};

export type PostCategoryData = {
  data: PostCategoryAttributes;
};

export type PostCategoryAttributes = {
  id: number;
  attributes: PostCategory;
};

export type PostCategory = {
  id: number;
  name: string;
  createdBy: number;
  updatedBy: number;
  createdAt: string;
  updated_at: string;
};

export type PostCreatedBy = {
  id: number;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCoverData = {
  data: PostCoverAttributes;
};

export type PostCoverAttributes = {
  id: number;
  attributes: PostCover;
};

export type PostCover = PostCoverFormat & {
  id: number;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  createdBy: number;
  updatedBy: number;
  createdAt: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostAttributes = {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: PostAuthorData;
  category: PostCategoryData;
  createdBy: PostCreatedBy;
  updatedBy: PostCreatedBy;
  createdAt: string;
  updated_at: string;
  cover: PostCoverData;
};
