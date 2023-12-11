import { useParams } from "react-router-dom";
import { productAPI } from "services/api";

export const useGetProductByParams = () => {
  const { productType, id } = useParams();

  const { data, isFetching } = productAPI.useGetProductQuery({
    productType,
    id,
  });

  return { data, isFetching };
};
