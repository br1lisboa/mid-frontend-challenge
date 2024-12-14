import { useParams } from "react-router-dom";
import { useGetProperty, usePutProperty } from "../../hooks";
import { Image, Layout } from "../../components";
import { Form } from "../create/components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IGetPropertyMapped } from "../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Status } from "../../interfaces/postProperty.interface";
import { useEffect } from "react";

type FormData = {
  title: string;
  description: string;
  address: string;
  type: string;
  status: string;
  price: string;
  ownerName: string;
  ownerAddress: string;
};

const REQUIRED = "Campo requerido";
const schemaString = z
  .string({ required_error: REQUIRED })
  .min(3, { message: REQUIRED });
const schemaPrice = z
  .string({ required_error: REQUIRED })
  .min(1, { message: REQUIRED })
  .refine(
    (value) => {
      const number = Number(value);
      if (isNaN(number)) {
        return false;
      }
      return true;
    },
    { message: "Solo se pueden ingresar números" }
  );

const schema = z.object({
  title: schemaString,
  description: schemaString,
  address: schemaString,
  type: schemaString,
  status: schemaString,
  price: schemaPrice,
  ownerName: schemaString,
  ownerAddress: schemaString,
});

function getDefaultValue(data: IGetPropertyMapped | undefined): FormData {
  const defaultValues = {
    title: data?.title || "",
    description: data?.description || "",
    address: data?.address || "",
    type: data?.typeOfProperty || "",
    status: data?.state || "",
    price: data?.price || "",
    ownerName: data?.owner?.name || "",
    ownerAddress: data?.owner?.contact || "",
  };

  return defaultValues;
}

export default function EditView() {
  const params = useParams();

  const { data, isLoading } = useGetProperty({ id: params.id || "" });

  const { mutate } = usePutProperty({});

  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: getDefaultValue(data),
    mode: "all",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (data) {
      reset(getDefaultValue(data));
    }
  }, [data, reset]);

  function onSubmit(formData: FormData) {
    const dataToSend = {
      title: formData.title,
      description: formData.description,
      address: formData.address,
      type: formData.type,
      status: formData.status as Status,
      price: Number(formData.price) || 0,
      owner: {
        name: formData.ownerName,
        contact: formData.ownerAddress,
      },
    };

    mutate({ id: params.id || "", property: dataToSend });
  }

  return (
    <Layout className="bg-white" isLoading={isLoading}>
      <div className="flex h-full gap-4 w-full my-2">
        <picture className="hidden sm:block sm:flex-1 m-auto">
          <Image
            src={data?.image || ""}
            alt="edificios"
            className="rounded-md"
          />
        </picture>

        <section className="flex-1 m-auto">
          <div className="bg-white rounded-md shadow-md p-4">
            <p className="text-2xl pb-8">Edición de propiedades</p>
            <Form
              control={control}
              isLoading={isLoading}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
