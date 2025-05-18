import React from 'react'

type propsType = {
    menuHeading : string;
    element1 : string;
    element2 : string;
    element3 : string;
    element4 : string;
}

const MenuElement = (props : propsType) => {
  return (
    <div>
        <div className='z-50 p-2 relative rounded rounded-b-none group transition-all duration-300 ease-in-out hover:bg-[var(--secondary)]'>
            {props.menuHeading}
            <div className=' scale-y-0 min-w-full absolute top-10 left-0 flex-col gap-2 rounded rounded-t-none bg-[var(--secondary)] transition-all duration-300 ease-in-out origin-top group-hover:scale-y-100 '>
                <p className='p-2 text-sm'>{props.element1}</p>
                <p className='p-2 text-sm'>{props.element2}</p>
                <p className='p-2 text-sm'>{props.element3}</p>
                <p className='p-2 text-sm'>{props.element4}</p>
            </div>
        </div>
    </div>
  )
}

export default MenuElement