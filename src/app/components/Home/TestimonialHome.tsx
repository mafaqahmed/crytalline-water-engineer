import constants from "@/app/constants/home";
import ProgressBar from "../ProgressBar";

const TestimonialHome = () => {
  return (
    <div className="bg-ternary" id="testimonials">
      <div className="max-w-[80%] mx-auto py-16">
        <div className="md:mt-4 mb-14">
          <h1 className="text-red-700 text-center font-bold text-3xl">
            Testimonials
          </h1>
          <p className="text-center text-sm">
            The most relaiable team for all kind of water solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {constants.testimonials.map((testimonial, ind) => (
            <div key={ind}>
              <div className="w-full font-semibold text-primary text-[0.9rem] md:text-base mb-3 gap-3">
                <p className="text-center">{testimonial.label}</p>
                {/* <p className="whitespace-nowrap">{testimonial.progress}%</p> */}
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
