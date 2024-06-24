import {
  SLSAMGBLK,
  F12,
  GT350R,
  GTR,
  Huracan,
  LFA,
  Porsche911,
  Viper,
  C7ZR1,
  ZondaCinque,
  Bmw
} from "./models/ModelImports";
import { CarManufacturer } from "./types/types";

export const carModelComponents: {
  [key in CarManufacturer]: React.LazyExoticComponent<
    (props: any) => JSX.Element
  >;
} = {
  Lamborghini: Huracan,
  Ferrari: F12,
  Porsche: Porsche911,
  Ford: GT350R,
  Dodge: Viper,
  Lexus: LFA,
  Nissan: GTR,
  BMW:Bmw,
  "Mercedes-Benz": SLSAMGBLK,
  Chevrolet: C7ZR1,
  Pagani: ZondaCinque,
};
