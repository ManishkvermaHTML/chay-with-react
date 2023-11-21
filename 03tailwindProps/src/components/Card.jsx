import React from "react";
function Card({userName = "user"}){
  // console.log("userName: ", props.userName);

  return (
    <>
      <br />
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 md:max-w-[460px]">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/2393789/pexels-photo-2393789.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            {/* <div>{userName||"userName"}</div> */}
            <div>{userName||"userName"}</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
      <br />
    </>
  );
}
export default Card;
