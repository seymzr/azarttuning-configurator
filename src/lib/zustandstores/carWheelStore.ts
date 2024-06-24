import { create } from "zustand";

type CarWheelStateTypes = {
  wheels: CarWheelProps;
  setWheel: (wheels: CarWheelProps) => void;
};

type CarWheelProps = {
  name: string;

};

export const useCarWheelStore = create<CarWheelStateTypes>()(
  (set) => ({
    name: "test",
    wheels:{
      name:"Factory"
    },
    setWheel: (wheels: CarWheelProps) => set(() => ({ wheels })),
  })
);
