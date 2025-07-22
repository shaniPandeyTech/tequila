'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap, { Power3, Power4 } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Image from 'next/image'
import Link from 'next/link'

import VideoPlayer from '@/component/VideoPlayer'

export default function Home() {
  return (
    <>
      <main>
        <section className="pt-[30dvh] pb-[30dvh] overflow-hidden">
          <div className="container flex justify-between m-auto">
            <div className="w-5/12 text-right">
              <h1 className="tq__PPMedium__58 text-left w-full max-w-[800px] ml-auto bg-black p-[50px] -mt-[50px] relative z-1">
                <span className="block text-right">An Award Winning</span>
                <span className="block">Branding and Web Design</span>
                <span className="block">Agency in Dubai.</span>
              </h1>
            </div>
            <div className="w-7/12 relative">
              <h2 className="tq__Instrument_36 px-[50px] mb-[32px]">
                Strategic, intentional, and unapologetically bold <br />
                Branding and Web Experiences built to lead,{' '}
                <span className="italic">not follow.</span>
              </h2>
              <div className="flex gap-[20px] px-[50px] mb-[50px]">
                <Link
                  href={'#'}
                  className="uppercase font-medium px-[15px] pt-[10px] pb-[6] border-1 border-white rounded-full"
                >
                  Get to know us
                </Link>
                <Link
                  href={'#'}
                  className="uppercase text-black font-medium px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
                >
                  Case Studies
                </Link>
              </div>
              <div className="px-[50px] relative">
                <div className="tq__VideoWrapper bg-red-400">
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[150px]">
          <div className="container flex justify-between m-auto">
            <div className="w-6/12">
              <h2 className="tq__PPBook__100 mb-[32px]">The Agency</h2>
              <h3 className="tq__Instrument_36 mb-[32px]">
                Strategic, Intentional, and Unapologetically <br />
                Bold—Branding and Web Experiences <br />
                Built to Lead, Not Follow.
              </h3>
              <div className="max-w-[65%] ml-auto">
                <p className="tq__FoundersGrotesk_22 font-light indent-12 mb-[32px]">
                  A "Creative Intelligence Studio" - an agency that not only designs and builds, but
                  crafts brands with intellect, heart, and future-readiness. Not just aesthetic
                  designs or websites, but strategic experiences.
                </p>
                <Link
                  href={'#'}
                  className="uppercase text-black font-medium px-[15px] pt-[10px] pb-[6] bg-white border border-white rounded-full"
                >
                  Know More
                </Link>
              </div>
            </div>
            <div className="w-6/12">
              <p className="tq__FoundersGrotesk_22 uppercase text-right mb-[64px]">Why choose us</p>
              <div className="flex justify-between items-start flex-wrap max-w-[70%] ml-auto">
                <div className="w-1/2 mb-[64px]">
                  <p className="tq__FoundersGrotesk_22 uppercase">Years of Experience</p>
                  <h2 className="tq__Instrument_100">25+</h2>
                </div>
                <div className="w-1/2 mb-[64px]">
                  <p className="tq__FoundersGrotesk_22 uppercase">PRojects Delivered</p>
                  <h2 className="tq__Instrument_100">800+</h2>
                </div>
                <div className="w-1/2">
                  <p className="tq__FoundersGrotesk_22 uppercase">Client Retention Rate</p>
                  <h2 className="tq__Instrument_100">100%</h2>
                </div>
                <div className="w-1/2">
                  <p className="tq__FoundersGrotesk_22 uppercase">Projects Per Year</p>
                  <h2 className="tq__Instrument_100">30+</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
