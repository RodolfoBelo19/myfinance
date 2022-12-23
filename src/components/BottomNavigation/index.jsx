import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

import planning from '../../assets/planning.png'
import search from '../../assets/search.png'
import analytics from '../../assets/analytics.png'
import files from '../../assets/files.png'
import settings from '../../assets/settings.png'

import { ChartPieIcon } from '@heroicons/react/24/solid'
import { InboxIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const BottomNavigation = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="w-full flex flex-col items-end">
      <div className='w-full'>
        <Tab.Group>
          <Tab.List className="flex space-x-1 bg-zinc-800 p-5">
            <Swiper
              spaceBetween={34}
              slidesPerView={3}
              height={400}
              width={400}
              allowSlideNext={true}
              allowSlidePrev={true}
              slidesPerGroup={5}
              navigation={false}
              breakpoints={{
                300: {
                  width: 300,
                  slidesPerView: 4,
                  slidesPerGroup: 3
                },
                640: {
                  width: 450,
                  slidesPerView: 4,
                  slidesPerGroup: 3
                },
                768: {
                  width: 400,
                  slidesPerView: 4,
                  slidesPerGroup: 3
                },
              }}
            >
              <SwiperSlide>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full text-sm font-medium leading-5 text-white',
                      'outline-none',
                      selected
                        ? 'bg-zinc-400 shadow text-black rounded-md p-2'
                        : 'text-blue-100 hover:bg-white/[0.12] rounded-md hover:text-white'
                    )
                  }
                >
                  <div className='flex flex-col justify-center items-center'>
                    <ChartPieIcon className='h-12' />
                    <span>Dashboard</span>
                  </div>
                </Tab>
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full text-sm font-medium leading-5 text-white',
                      'outline-none',
                      selected
                        ? 'bg-zinc-400 shadow text-black rounded-md p-2'
                        : 'text-blue-100 hover:bg-white/[0.12] rounded-md hover:text-white'
                    )
                  }
                >
                  <div className='flex flex-col justify-center items-center'>
                    <InboxIcon className='h-12' />
                    <span>Inbox</span>
                  </div>
                </Tab>
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full text-sm font-medium leading-5 text-white',
                      'outline-none',
                      selected
                        ? 'bg-zinc-400 shadow text-black rounded-md p-2'
                        : 'text-blue-100 hover:bg-white/[0.12] rounded-md hover:text-white'
                    )
                  }
                >
                  <div className='flex flex-col justify-center items-center'>
                    <UserCircleIcon className='h-12' />
                    <span>Accounts</span>
                  </div>
                </Tab>
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full text-sm font-medium leading-5 text-white',
                      'outline-none',
                      selected
                        ? 'bg-zinc-400 shadow text-black rounded-md p-2'
                        : 'text-blue-100 hover:bg-white/[0.12] rounded-md hover:text-white'
                    )
                  }
                >
                  <div className='flex flex-col justify-center items-center'>
                    <ClipboardDocumentListIcon className='h-12' />
                    <span>Schedule</span>
                  </div>
                </Tab>
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full text-sm font-medium leading-5 text-white',
                      'outline-none',
                      selected
                        ? 'bg-zinc-400 shadow text-black rounded-md p-2'
                        : 'text-blue-100 hover:bg-white/[0.12] rounded-md hover:text-white'
                    )
                  }
                >
                  <div className='flex flex-col justify-center items-center'>
                    <ClipboardDocumentListIcon className='h-12' />
                    <span>Schedule</span>
                  </div>
                </Tab>
              </SwiperSlide>
              <SwiperSlide>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full text-sm font-medium leading-5 text-white',
                      'outline-none',
                      selected
                        ? 'bg-zinc-400 shadow text-black rounded-md p-2'
                        : 'text-blue-100 hover:bg-white/[0.12] rounded-md hover:text-white'
                    )
                  }
                >
                  <div className='flex flex-col justify-center items-center'>
                    <ClipboardDocumentListIcon className='h-12' />
                    <span>Schedule</span>
                  </div>
                </Tab>
              </SwiperSlide>
            </Swiper>
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          'absolute inset-0',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

    </div >
  )
}