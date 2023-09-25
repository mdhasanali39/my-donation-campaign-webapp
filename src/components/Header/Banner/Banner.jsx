const Banner = () => {
  return (
    <div className="flex justify-center items-center min-h-[89vh]">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className="relative w-3/4">
          <input
            className="w-full px-4 py-3 rounded-lg border outline-none border-[#DEDEDE] text-sm"
            type="text"
            placeholder="Search here...."
          />
          <button
            className="absolute right-0 h-full px-4 py-3 bg-[#FF444A] rounded-r-lg text-white font-semibold
        "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
