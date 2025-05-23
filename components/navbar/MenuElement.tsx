import Link from 'next/link';
import React from 'react'

type propsType = {
    menuHeading : string;
    element1 : string;
    element2 : string;
    element3 : string;
    element4 : string;
    path1 : string;
    path2 : string;
    path3 : string;
    path4 : string;
}

const MenuElement = (props : propsType) => {
  return (
    <div >
        <div className='z-50 p-2 relative rounded gap-2 group transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            {props.menuHeading}
            <div className=' scale-y-0 min-w-full absolute top-15 left-0 flex flex-col gap-2 text-nowrap rounded bg-[var(--text_color)] text-white font-semibold shadow-lg shadow-[#E2D8FF] transition-all duration-300 ease-in-out origin-top group-hover:scale-y-100 '>
                <Link href={props.path1} className='py-4 px-10 text-sm transition-all duration-300 ease-in-out hover:translate-x-1'>{props.element1}</Link>
                <Link href={props.path2} className='py-4 px-10 text-sm transition-all duration-300 ease-in-out hover:translate-x-1'>{props.element2}</Link>
                <Link href={props.path3} className='py-4 px-10 text-sm transition-all duration-300 ease-in-out hover:translate-x-1'>{props.element3}</Link>
                <Link href={props.path4} className='py-4 px-10 text-sm transition-all duration-300 ease-in-out hover:translate-x-1'>{props.element4}</Link>
            </div>
        </div>
    </div>
  )
}

export default MenuElement