"use client";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 2,
      text: "Years of experience",
    },
    {
      num: 6,
      text: "Projects completed",
    },
    {
      num: 6,
      text: "Technologies learned",
    },
    {
      num: 230,
      text: "Code commits",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={4}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
