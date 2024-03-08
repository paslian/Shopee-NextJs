import Image from "next/image";

const hero1 =
  "https://cf.shopee.co.id/file/id-50009109-90b61dcb7e83a9fa6556d6a563126d5a_xxhdpi";
const hero2 =
  "https://cf.shopee.co.id/file/id-50009109-21f68b590c2513d5f62d8e0113e7bc4f_xhdpi";
const hero3 =
  "https://cf.shopee.co.id/file/id-50009109-05fa305a70c1e80f63d0f960db48971b_xhdpi";

const Hero = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-2 pt-5">
      <Image
        className="basis-8/12 w-full rounded"
        src={hero1}
        alt=""
        width={500}
        height={0}
      ></Image>
      <div className="basis-4/12 flex flex-col gap-2 justify-between">
        <Image
          className="w-full h-full rounded"
          src={hero2}
          alt=""
          width={500}
          height={0}
        ></Image>
        <Image
          className="w-full h-full rounded"
          src={hero3}
          alt=""
          width={500}
          height={0}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
