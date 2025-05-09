import Input from "~/components/Input";
import Google from "~/icons/Google";

export default function SigninPage() {
  return (
    <section className="flex flex-row flex-nowrap w-full items-center justify-center">
      <div className="max-w-lg w-full px-4 py-6 bg-white rounded-md shadow-md">
        <header className="">
          <h1 className="font-bold text-xl py-4">Signup</h1>
        </header>

        <div className="flex flex-col flex-nowrap gap-8">
          <div className="py-6">
            <div className="border border-slate-200 rounded-md">
              <div className="flex flex-row flex-nowrap gap-2 items-center justify-center py-2">
                <Google className="w-8 h-8" />
                <span>Signup with Google</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-nowrap items-center justify-center text-slate-400">
            <hr className="grow" />
            <span className="text-slate-400 px-4">or</span>
            <hr className="grow" />
          </div>

          <div>
            <div>
              <Input name="email" type="text" label="Email" />
              <Input name="password" type="password" label="Password" />
            </div>

            <div className="flex flex-row flex-nowrap justify-center w-full">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 py-2 px-4 rounded-md text-white hover:cursor-pointer transition-colors"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
