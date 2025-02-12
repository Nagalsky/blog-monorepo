import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Expore Insights, Tutorials amd Stories For Curious Mind Like Yours
            </p>
            <h1 className="text-4xl font-medium md:text-5xl">
              Welcome to <span className="font-bold text-blue-500">Dev</span>{" "}
              blog
            </h1>
            <p className="text-xl">
              Join a Community that thrives on Learning, Creating and Growing
              togather
            </p>
          </div>
          <div>
            <Image
              src={"/hero.png"}
              width={500}
              height={500}
              alt="hero"
              className="mx-auto h-auto w-4/5 rounded-xl lg:w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
