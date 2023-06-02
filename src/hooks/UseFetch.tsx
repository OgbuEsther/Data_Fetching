const url = "https://api.escuelajs.co/api/v1/products";

import axios from "axios";
import { useState, useEffect } from "react";
import { getData } from "../utils/API";

export const useFetch = () => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    getData().then((res: any) => {
      setState(res?.data);
    });
  }, []);

  

  return state?.data;
};
