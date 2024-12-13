import { useMutation, useQueryClient } from "react-query";
import { deleteProperty } from "../services/deleteProperty.services";
import { KEY_PROPERTIES } from "../interfaces";
import { useNavigate } from "react-router-dom";

export function useDeleteProperty() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProperty(id),
    onSuccess: () => {
      queryClient.invalidateQueries(KEY_PROPERTIES);
    },
    onError: () => navigate("/error"),
  });
}
