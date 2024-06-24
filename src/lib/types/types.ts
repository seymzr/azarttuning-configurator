export type CarManufacturer =
  | "Lamborghini"
  | "Ferrari"
  | "Ford"
  | "Porsche"
  | "Dodge"
  | "Lexus"
  | "Nissan"
  | "Bmw"
  | "S63"
  | "Mercedes-Benz"
  | "Chevrolet"
  | "Pagani";

export type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
  };
};

export type CarColorProps = {
  name: string;
  hexCode: string;
};
