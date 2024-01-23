import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section className="bg-Bright-Red flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 md:bg-simplify-desktop bg-simplify-mobile bg-no-repeat lg:bg-center gap-10 p-[50px] justify-around">
<h2 className="text-[30px] text-white text-bold lg:max-w-[360px]">Simplify How your team works today.</h2>
<div className="">
  <Button className={"bg-white text-Bright-Red z-50"}/>
</div>
    </section>
  )
}

export default CTA
