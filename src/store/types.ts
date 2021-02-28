export interface NameDetails {
  title: string;
  first: string;
  last: string;
};

interface Location {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export interface Contact {
  gender: string;
  name: NameDetails;
  location: Location;
  email: string;
  login: { username: string };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export type APIResponse = {
  results: Contact[];
};
