import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[63rem] flex justify-center items-center">
      {/* Hero Image */}
      <div className="relative w-[90rem] -mt-56 h-[48rem]">
        <Image
          src="/Hero.png"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
        {/* Hero Text */}
        <div className="ml-72 mt-11 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] w-[34rem] rounded-md p-16 leading-8">
          <h6 className="font-bold text-lg">New Arrival</h6>
          <h3 className="text-4xl font-extrabold text-[#B88E2F] mt-4">
            Discover Our <br /> New Collection
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
          </p>
          <button className="mt-6 bg-[#B88E2F] text-white py-2 px-12 rounded">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}