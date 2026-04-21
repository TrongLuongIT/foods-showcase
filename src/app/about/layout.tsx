// app/about/layout.tsx
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-yellow-100 p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">layout riêng của trang about</h2>
      <div>{children}</div>
    </section>
  );
}
