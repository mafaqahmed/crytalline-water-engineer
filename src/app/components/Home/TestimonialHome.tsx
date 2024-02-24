import constants from "@/app/constants/home";
import ProgressBar from "../ProgressBar";

const TestimonialHome = () => {
  return (
    <div className="bg-ternary">
      <div className="max-w-[90%] mx-auto py-16">
        <div className="md:mt-4 mb-14">
          <h1 className="text-red-700 text-center font-bold text-3xl">
            Testimonials
          </h1>
          <p className="text-center text-sm">
            The most relaiable team for all kind of water solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {constants.testimonials.map((testimonial, ind) => (
            <div key={ind}>
              <div className="w-full flex items-center justify-between font-semibold text-primary text-base mb-3 gap-3">
                <p>{testimonial.label}</p>
                <p className="whitespace-nowrap">{testimonial.progress} %</p>
              </div>
              <ProgressBar progress={testimonial.progress} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialHome;
