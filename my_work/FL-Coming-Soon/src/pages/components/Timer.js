import React, { Fragment } from "react";

const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="flex w-full justify-around items-center py-8">
        <section className="flex flex-col items-center justify-center rounded-md card__shadow lg:px-6 py-4 lg:w-2/12 w-2/12">
          <h1 className=" text-3xl font-bold fl__text_blue">{timerDays}</h1>
          <p className="text-base fl__text_dark_blue">
            <span>Days</span>
          </p>
        </section>
        <section className="flex flex-col items-center justify-center rounded-md card__shadow lg:px-6 py-4 lg:w-2/12 w-2/12">
          <h1 className=" text-3xl font-bold fl__text_blue">{timerHours}</h1>
          <p className="text-base fl__text_dark_blue">
            <span>Hours</span>
          </p>
        </section>
        <section className="flex flex-col items-center justify-center rounded-md card__shadow lg:px-6 py-4 lg:w-2/12 w-2/12">
          <h1 className=" text-3xl font-bold fl__text_blue">{timerMinutes}</h1>
          <p className="text-base fl__text_dark_blue">
            <span>Minutes</span>
          </p>
        </section>
        <section className="flex flex-col items-center justify-center rounded-md card__shadow lg:px-6 py-4 lg:w-2/12 w-2/12">
          <h1 className=" text-3xl font-bold fl__text_blue">{timerSeconds}</h1>
          <p className="text-base fl__text_dark_blue ">
            <span>Seconds</span>
          </p>
        </section>
      </section>
    </Fragment>
  );
};

Timer.defaultProps = {
  timerDays: "32",
  timerHours: "08",
  timerMinutes: "12",
  timerSeconds: "44",
};

export default Timer;
