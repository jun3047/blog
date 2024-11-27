import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:flex justify-center">
        <div className="mt-20 w-full px-10 md:mt-24 md:p-0 md:w-[768px]">
          <div className="prose prose-invert">{children}</div>
        </div>
      </div>
      <Nav />
    </>
  );
}
