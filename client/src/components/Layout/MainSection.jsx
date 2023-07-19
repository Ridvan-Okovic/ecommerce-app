const MainSection = (props) => {
  return (
    <section className="w-screen h-screen overflow-hidden">
      {props.children}
    </section>
  );
};

export default MainSection;
