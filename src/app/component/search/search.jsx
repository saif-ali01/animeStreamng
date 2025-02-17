"use client"
import React from 'react';
import '../../globals.css';
import { usePathname ,useRouter} from 'next/navigation';

const Search = () => {
  const path = usePathname();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic for handling the form submission goes here
    console.log(path);
    
    const inputQuery = e.target.search.value;

    // Split the input query into words
    const words = inputQuery.split(/\s+/);

    // Join the words with a single space
    const query = words.join(' ');

    // Log the formatted query
    console.log(query);

    router.push(`${path}?q=${query}`)
    // Clear the content of the search input after form submission
    var search = document.getElementById('search');
    search.value = '';
  };

  return (
    <div className={`text-white mt-6 flex justify-center`}>
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autoFocus required />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Search;
