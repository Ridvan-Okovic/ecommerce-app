import { Checkmark, DiscountTag, Location, ArrowRight } from '../utils/icons';

const AboutUs = () => {
  return (
    <div className="w-full h-[calc(100vh-56px)] pt-24 font-montserrat">
      <div className="text-3xl font-medium text-center space-y-2">
        <h3>
          <span className="text-green-500">Pallessi </span>
          is the only verified reseller of
        </h3>
        <h3>authenitaced limitied edition furniture sets.</h3>
      </div>
      <section className="w-full mt-24 flex flex-row gap-8 items-center justify-center">
        <div className="flex gap-4 w-80">
          <div>
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
              <Checkmark />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Verified reseller</h3>
            <h5 className="text-base text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              consequuntur atque maxime labore, placeat ducimus ut tenetur qui
              libero ex doloribus recusandae, minus asperiores quas.
            </h5>
            <a className="flex items-center gap-2 text-green-500 group" href="">
              Learn more{' '}
              <span className="">
                <ArrowRight />
              </span>{' '}
            </a>
          </div>
        </div>
        <div className="flex gap-4 w-80">
          <div>
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
              <DiscountTag />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Best prices</h3>
            <h5 className="text-base text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              consequuntur atque maxime labore, placeat ducimus ut tenetur qui
              libero ex doloribus recusandae, minus asperiores quas.
            </h5>
            <a className="flex items-center gap-2 text-green-500 group" href="">
              Learn more{' '}
              <span className="">
                <ArrowRight />
              </span>{' '}
            </a>
          </div>
        </div>
        <div className="flex gap-4 w-80">
          <div>
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
              <Location />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Many locations</h3>
            <h5 className="text-base text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              consequuntur atque maxime labore, placeat ducimus ut tenetur qui
              libero ex doloribus recusandae, minus asperiores quas.
            </h5>
            <a className="flex items-center gap-2 text-green-500 group" href="">
              Learn more{' '}
              <span className="">
                <ArrowRight />
              </span>{' '}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
