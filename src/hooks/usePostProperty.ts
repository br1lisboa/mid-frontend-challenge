import { useMutation } from "react-query";
import { IPostProperty } from "../interfaces";
import { postProperty } from "../services";
import { useNavigate } from "react-router-dom";

type UsePostProperty = {
  callback?: () => void;
};

export function usePostProperty({ callback }: UsePostProperty) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (property: IPostProperty) => postProperty(property),
    onSuccess: () => {
      if (callback) {
        callback();
      }
    },
    onError: () => navigate("/error"),
  });
}
