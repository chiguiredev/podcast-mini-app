export interface Author {
  name: LabelUri;
  uri: LabelUri;
}

export interface LabelUri {
  label: string;
}

export interface Entry {
  "im:name": Label;
  "im:image": Image[];
  summary: Label;
  "im:price": Price;
  "im:contentType": ContentType;
  rights: Label;
  title: Label;
  link: Link;
  id: ID;
  "im:artist": Artist;
  category: Category;
  "im:releaseDate": ReleaseDate;
}

export interface Label {
  label: string;
}

export interface Image {
  label: string;
  attributes: {
    height: string;
  };
}

export interface Price {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

export interface ContentType {
  attributes: {
    term: string;
    label: string;
  };
}

export interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

export interface ID {
  label: string;
  attributes: {
    "im:id": string;
  };
}

export interface Artist {
  label: string;
  attributes?: {
    href: string;
  };
}

export interface Category {
  attributes: {
    "im:id": string;
    term: string;
    scheme: string;
    label: string;
  };
}

export interface ReleaseDate {
  label: string;
  attributes: {
    label: string;
  };
}
