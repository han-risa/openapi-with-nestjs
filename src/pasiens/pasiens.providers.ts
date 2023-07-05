import { Pasiens } from "./pasiens.model";

export const pasiensProviders = [{
  provide: 'PASIENS_REPOSITORY',
  useValue: Pasiens,
}]