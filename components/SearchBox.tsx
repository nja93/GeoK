'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()

    const executeSearch = (event) => {
        event.preventDefault()
        if (!searchQuery) return;
        console.log('searchQuery', searchQuery)
        router.push(`/search?q=${searchQuery}`)
    }



    return (
      
        <form onSubmit={executeSearch} className='w-full'>
            <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                    <input
                        id="search"
                        className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                        name="search"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value)
                        }}
                    />
                </div>
            </div>
        </form>
        
    )
}

export default SearchBox