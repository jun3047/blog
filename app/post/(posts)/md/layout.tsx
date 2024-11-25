import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:flex justify-center">
        <div className="m-10 mt-24 md:m-20">
          <div className="prose prose-invert">{children}</div>
        </div>
      </div>
      <Nav />
    </>
  );
}
