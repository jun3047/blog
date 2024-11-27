import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:flex justify-center">
        <div className="mt-24 md:m-20 md:w-full w-[768px]">
          <div className="prose prose-invert md:w-full w-[768px]">
            {children}
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
}
