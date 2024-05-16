export function PageWrapper({ children }) {
  return (
    <>
      <div
        className="p-4 pt-20 flex flex-col dark darkPrimary text-foreground bg-background overflow-y- min-h-screen scroll-smooth selection:bg-primary/10 selection:text-primary text-center">
        {children}
      </div>
    </>
  );
}
