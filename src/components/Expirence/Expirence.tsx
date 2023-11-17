export const Expirence = () => {
  return (
    <div className="flex gap-y-6 flex-col justify-center">
      <div className="flex justify-center text-center mb-10 ">
        <span className="text-4xl font-extrabold ">Expirence</span>
      </div>
      <ol className="items-center sm:flex md:w-full">
        {expirenceData?.map((data) => {
          return (
            <li className="relative mb-6 sm:mb-0" key={data.companyName}>
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8 ">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {data.companyName}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {data.from} -{data.to}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {data.breif}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const expirenceData = [
  {
    companyName: "JP Morgan Chase",
    current: true,
    breif: "Work as Full stack developer to delivery",
    from: "May-2021",
    to: "Present",
  },
  {
    companyName: "E&Y",
    current: false,
    breif: "Work as Full stack developer to delivery",
    from: "Aug-2019",
    to: "April-2021",
  },
  {
    companyName: "L&Q Private LTD",
    current: false,
    breif: "Work as Full stack developer to delivery",
    from: "Jan-2017",
    to: "July-2019",
  },
];
