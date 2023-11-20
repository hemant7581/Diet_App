import React from 'react'

const Water_Tracker = () => {
  return (
    <>
    {/* med main */}
    <section className="absolute  bg-green shadow-MedShadow font-sans h-[356px] w-[428px] rounded-[18px] left-[458px] top-[773px] overflow-hidden">
    <h2 className='absolute  text-dark-green-color left-[73px]  top-[18px] font-sans text-13xl leading-7 font-semibold'>Medicine Tracker</h2>
    
    {/* med section  */}
<section >
  {/* 1 */}
  <p className='absolute left-9 top-[111px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Morning</p>
  <input type="checkbox" name="med_check" className=' absolute  left-[370px] top-[115px] rounded accent-dark-green-color w-[24px] h-[21px]' />

  {/* 2 */}
  <p className='absolute left-9 top-[171px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Afternoon</p>
  <input type="checkbox" name="med_check" className=' absolute  left-[370px] top-[175px] rounded accent-dark-green-color w-[24px] h-[21px]' />

  {/* 3 */}
  <p className='absolute left-9 top-[225px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Evening</p>
  <input type="checkbox" name="med_check" className=' absolute  left-[370px] top-[229px] rounded accent-dark-green-color w-[24px] h-[21px]' />

  {/* 4 */}
  <p className='absolute left-9 top-[282px] text-5xl font-inherit leading-7 font-normal text-dark-green-color'>Night</p>
  <input type="checkbox" name="med_check" className=' absolute  left-[370px] top-[286px] rounded accent-dark-green-color w-[24px] h-[21px]' />
</section>

    {/* med section  */}
    </section>
    {/* med main */}
    </>
  )
}

export default Water_Tracker
