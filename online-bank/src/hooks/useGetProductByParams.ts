import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productAPI } from "services/api";

export const useGetProductByParams = () => {
  const { productType, id } = useParams();

  const [trigger, { data, isFetching }] = productAPI.useLazyGetProductQuery();

  useEffect(() => {
    if (productType && id) trigger({ productType, id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isFetching };
};
