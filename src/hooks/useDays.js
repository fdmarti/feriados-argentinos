import { useState, useEffect } from "react";
import getCurrentDay from "../helpers/getCurrentday";

export const useDays = () => {
  const [data, setData] = useState({
    missingDays: 0,
    isLoading: true,
  });

  const getDays = async () => {
    setData({
      missingDays: 0,
      isLoading: true,
    });

    const response = await fetch("../../data/dias-festivos.json");
    const result = await response.json();

    const { currentYear, currentFullDay } = getCurrentDay();

    const arrayDays = result.map((day) => {
      const splitDay = day.day.split("/");
      const fullDay = new Date(
        splitDay[1] + "/" + splitDay[0] + "/" + currentYear
      );
      const currentDayformat = new Date(currentFullDay);

      const diffTime = currentDayformat - fullDay;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return {
        diffDays,
        day,
      };
    });

    const nextFreeDay = arrayDays
      .filter((day) => day.diffDays < 0)
      .sort((first, second) => second.diffDays - first.diffDays);

    setData({
      missingDays: nextFreeDay[0],
      isLoading: false,
    });
  };

  useEffect(() => {
    getDays();
  }, []);

  return {
    data,
  };
};
