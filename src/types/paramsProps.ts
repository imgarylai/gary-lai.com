import { ParsedUrlQuery } from "querystring";

export default interface ParamsProps extends ParsedUrlQuery {
  slug?: string;
  page?: string;
}
