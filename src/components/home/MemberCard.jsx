import React from 'react'
import { Link } from 'react-router'
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXFill } from "react-icons/ri";

export default function MemberCard({memberPhoto,jobTitle,MemberName}) {
  return (
    <>
    <div className="member-card min-h-[300px] group bg-light-gray relative w-full">
        <img src={memberPhoto} alt="" />
        <div className="badge-card absolute left-0 mx-5 right-0 bottom-[30px] group-hover:bottom-[50px] duration-300 p-5 bg-white">
            <p className="job-title uppercase mb-2 text-sm tracking-wider font-bold text-light-orange">{jobTitle}</p>
            <div className="name-social-link flex justify-between items-center">
                <h2 className="name text-xl md:text-2xl font-bold">{MemberName}</h2>
                <div className="social link flex gap-5">
                   <Link to='https://www.facebook.com'><CgFacebook className='hover:text-light-orange duration-300 text-light-gray' size={22} /></Link>
                   <Link to='https://www.linkedin.com'><RiTwitterXFill className='hover:text-light-orange duration-300 text-light-gray' size={22} /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
