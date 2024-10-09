import { OrderForm } from "@/app/components/OrderForm";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen mt-12">
      <main className="min-w-80 max-w-l pt-4">
        <h1 className="text-2xl font-bold text-center">Sea Otter Menu</h1>
        <OrderForm />
      </main>
    </div>
  );
}
