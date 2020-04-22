export interface RootObject {
  body?: Body;
  footer?: Footer;
}

export interface Footer {
  author?: Author;
  redesociales?: Redesociales;
}

export interface Redesociales {
  Facebook?: string;
  Github?: string;
  Gmail?: string;
  Instagram?: string;
  Linkedin?: string;
  Youtube?: string;
}

export interface Author {
  link?: string;
  name?: string;
}

export interface Body {
  anexo_call?: string;
  call?: number;
  carrer?: string;
  experience_old?: string;
  name?: string;
}