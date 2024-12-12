import { useMutation } from "react-query";
import { IPostProperty } from "../interfaces";
import { postProperty } from "../services";

type UsePostProperty = {
  callback?: () => void;
};

export function usePostProperty({ callback }: UsePostProperty) {
  return useMutation({
    mutationFn: (property: IPostProperty) => postProperty(property),
    onSuccess: () => {
      if (callback) {
        callback();
      }
    },
  });
}
