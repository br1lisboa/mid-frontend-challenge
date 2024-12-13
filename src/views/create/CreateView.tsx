import { Image, Layout } from "../../components";

import { useFormCreate } from "./hooks/useFormCreate";
import { Form, Title } from "./components";

export default function CreateView() {
  const { control, isLoading, onSubmit, isSuccess } = useFormCreate();

  return (
    <Layout>
      <div className="flex h-full gap-4 w-full my-2">
        <picture className="hidden sm:block sm:flex-1 m-auto">
          <Image src="../../../public/edificios.jpg" alt="edificios" />
        </picture>

        <section className="flex-1 m-auto">
          <div className="bg-white rounded-md shadow-md p-4">
            <Title isSuccess={isSuccess} />

            <Form control={control} isLoading={isLoading} onSubmit={onSubmit} />
          </div>
        </section>
      </div>
    </Layout>
  );
}
