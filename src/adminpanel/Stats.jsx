import React from 'react'
import Layer from './Layer'
const Stats = () => {
  return (
    <>
      <section className="bg-gray-100 w-screen h-screen md:h-screen ">
        <div class="grid grid-cols-12">
          <div className="h-screen col-span-2">
            <Layer />
          </div>
          <div class="col-span-10 flex flex-wrap  z-10 p-5 w-full bg-gray-100">
            <p className="text-gray-900">
              baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats