import { useMutation, useQueryClient } from "react-query";
import { IPostProperty, KEY_PROPERTIES } from "../interfaces";
import { putProperty } from "../services";
import { toast } from "react-toastify";

type UsePutPropertyProps = {
  callback?: () => void;
};

export function usePutProperty({ callback }: UsePutPropertyProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      property,
      id,
    }: {
      property: Partial<IPostProperty>;
      id: string;
    }) => putProperty(property, id),
    onSuccess: () => {
      toast.success("Propiedad editada con éxito!");
      queryClient.invalidateQueries(KEY_PROPERTIES);
      if (callback) {
        callback();
      }
    },
    onError: () => {
      toast.error("Ocurrió un error al intentar editar la propiedad!");
    },
  });
}
