import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:flex md:justify-center">
        <div className="px-10 mt-20 prose prose-invert w-full">{children}</div>
      </div>
      <Nav />
    </>
  );
}
