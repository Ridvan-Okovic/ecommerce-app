const MainSection = (props) => {
  return (
    <section className="w-screen max-h-screen overflow-x-hidden 3xl:overflow-hidden">
      {props.children}
    </section>
  );
};

export default MainSection;
