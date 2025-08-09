import Image from "next/image";

import { brands } from "@/helpers/brands";

import { Card } from "../ui/card";

export const PartnerBrands = () => {
  return (
    <div className="flex w-full gap-8 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {brands.map((brand) => (
        <div key={brand.name} className="flex flex-col items-center">
          <Card className="flex h-[80px] w-[80px] items-center justify-center p-4">
            <Image
              src={brand.src}
              alt={brand.name}
              width={brand.iconW}
              height={brand.iconH}
              className="rounded-3xl"
            />
          </Card>
          <h4 className="truncate px-4 font-semibold">{brand.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default PartnerBrands;
