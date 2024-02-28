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
        <form onSubmit={executeSearch}>
            <input type="text"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }}
            />
        </form>
    )
}

export default SearchBox