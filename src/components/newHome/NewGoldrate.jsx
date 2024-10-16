// import React from 'react';

// const Goldrate = () => {
//   return (
//     <div className=' py-6 bg-white justify justify-center text-center'>
//       <h1 className=''>Before selling the gold, stay updated with today gold rate!</h1>
//       <h2 className='pb-5'>Today Gold Rate Per Gram in Chennai (INR)</h2>
//       <div className=' px-10 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>

//         <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 p-10 shadow-lg border-solid border-black rounded-lg m-4 md:mx-2">
//           <h1 className="text-[#f4d837] text-3xl font-bold mb-4 pb-4">Pure Gold (24K)</h1>
//           <div className='grid grid-cols-2 gap-2'>
//             <h3 className='text-2xl text-black'>1 Gram</h3>
//             <p className="text-black text-3xl font-bold">7,575</p>
//             <h3 className='text-2xl text-black'>8 Gram</h3>
//             <p className="text-black text-3xl font-bold">60,600</p>
//           </div>
//         </div>

//         <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 p-10 shadow-lg border-solid border-black  rounded-lg m-4 md:mx-2">
//           <h1 className="text-[#eae42a] text-3xl font-bold mb-4 pb-4">Standard Gold (22K)</h1>
//           <div className='grid grid-cols-2 gap-2'>
//             <h3 className='text-2xl text-black'>1 Gram</h3>
//             <p className="text-black text-3xl font-bold">7,120</p>
//             <h3 className='text-2xl text-black'>8 Gram</h3>
//             <p className="text-black text-3xl font-bold">56,960</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Goldrate;
import React from 'react';
import { FaCrown } from 'react-icons/fa';  // Icons for more creative design

const Goldrate = () => {
  return (
    <div className='lg:py-40 py-10 bg-white text-center'>
      <h1 className='text-black text-xl font-semibold tracking-wide mb-2'>
        BEFORE SELLING THE GOLD, STAY UPDATED WITH TODAYS GOLD RATE!
      </h1>
      <h2 className='text-[#efbf04] text-4xl font-bold mb-12'>
        Today Gold Rate Per Gram in Chennai (INR)
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 justify-items-center'>

        {/* Pure Gold (24K) Section */}
        <div className="w-full bg-gradient-to-tr from-[#550000] from-10% via-[#ff0000] via-[100%] to-[#550000]  p-10 shadow-2xl rounded-lg transition-transform transform hover:scale-105">
          <div className='flex items-center justify-center mb-6'>

            <h1 className="text-[#fbfbfa] text-3xl font-bold">Pure Gold (24K)</h1>
          </div>
          <div className='grid gap-4'>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>1 Gram</h3>
              <p className="text-white text-3xl font-bold">7,575</p>
            </div>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>8 Gram</h3>
              <p className="text-white text-3xl font-bold">60,600</p>
            </div>
          </div>
        </div>
        {/* Standard Gold (22K) Section */}
        <div className="w-full bg-gradient-to-tr from-[#550000] from-10% via-[#ff0000] via-[100%] to-[#550000]  p-10 shadow-2xl rounded-lg transition-transform transform hover:scale-105">
          <div className='flex items-center justify-center mb-6'>

            <h1 className="text-[#fbfbfa] text-3xl font-bold">Standard Gold (22K)</h1>
          </div>
          <div className='grid gap-4'>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>1 Gram</h3>
              <p className="text-white text-3xl font-bold">7,575</p>
            </div>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>8 Gram</h3>
              <p className="text-white text-3xl font-bold">60,600</p>
            </div>
          </div>
        </div>




      </div>
      <p className='text-sm text-gray-600 mt-10'>Last Update: 09:39:14 AM</p>
    </div>
  );
};

export default Goldrate;
