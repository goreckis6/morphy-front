import type { RequestHandler } from '@builder.io/qwik-city';
import { redirect } from '@builder.io/qwik-city';

export const onGet: RequestHandler = () => {
  throw redirect(301, `/converters`);
};
