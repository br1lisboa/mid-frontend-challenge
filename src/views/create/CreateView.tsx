import { Button, Image, Layout } from "../../components";
import { InputTextElement, SelectElement } from "../../libs/form";
import { INPUTS, SELECTS } from "./mocks";

import { useFormCreate } from "./hooks/useFormCreate";

export default function CreateView() {
  const { control, isLoading, onSubmit, isSuccess } = useFormCreate();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-4 h-full sm:flex-row">
        <div className="flex-1 py-10 hidden sm:block">
          <Image
            src="../../../public/edificios.jpg"
            alt="edificios"
            className="h-[700px]"
          />
        </div>

        <div className="flex-1">
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
            <h2
              className={`text-lg font-semibold text-gray-700 capitalize ${
                isSuccess && "text-green-700 font-bold underline"
              }`}
            >
              {isSuccess ? "¡Registro exitoso!" : "Registrar propiedad"}
            </h2>

            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-6  sm:grid-cols-1">
                {INPUTS.map((input) => (
                  <InputTextElement
                    key={input.name}
                    control={control}
                    name={input.name as never}
                    label={input.label}
                    placeholder={input.placeholder}
                    disabled={isLoading}
                  />
                ))}

                {SELECTS.map((select) => (
                  <SelectElement
                    key={select.name}
                    control={control}
                    name={select.name as never}
                    label={select.label}
                    options={select.options}
                    disabled={isLoading}
                  />
                ))}
              </div>

              <div className="flex justify-end mt-6">
                <Button disabled={isLoading}>Guardar</Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
}
