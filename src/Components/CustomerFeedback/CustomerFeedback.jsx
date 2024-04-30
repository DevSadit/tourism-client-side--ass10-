const CustomerFeedback = () => {
  return (
    <section className="my-8 bg-gray-200 rounded-lg dark:bg-gray-100 text-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl text-[#008DDA] font-bold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {/* jasmeen */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#41B06E] dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800 h-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Your website made planning my trip to Malaysia a breeze! The
              information was comprehensive, and the booking process was
              seamless. Thank you!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#5BBCFF] dark:bg-violet-600 text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?1"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Jasmine Lee</p>
            <p className="text-sm uppercase">Bali, Indonesia</p>
          </div>
        </div>
        {/* jasmeen */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#41B06E] dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800 h-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I loved how your website showcased the diverse attractions of
              Malaysia, from its bustling cities to its tranquil nature
              reserves. It helped me create an itinerary that suited my
              interests perfectly.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#5BBCFF] dark:bg-violet-600 text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?2"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">J Michael</p>
            <p className="text-sm uppercase">Cape Town, South Africa</p>
          </div>
        </div>
        {/* jasmeen */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#41B06E] dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800 h-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              The photos on your website truly captured the beauty of Malaysia.
              They inspired me to book a trip, and I {`wasn't`} disappointed when I
              arrived. It was even more stunning in person!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#5BBCFF] dark:bg-violet-600 text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?3"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">
              Alexander Patel
            </p>
            <p className="text-sm uppercase">Edinburgh, Scotland</p>
          </div>
        </div>
        {/* jasmeen */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#41B06E] dark:bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100 dark:text-gray-800 h-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Navigating your website was effortless, and I appreciated the
              handy travel tips and recommendations provided. It made me feel
              confident and excited about exploring Malaysia for the first time.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-black dark:text-violet-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#5BBCFF] dark:bg-violet-600 text-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/50x50/?portrait?4"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500  dark:bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Olivia Chang</p>
            <p className="text-sm uppercase">Kyoto, Japan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
