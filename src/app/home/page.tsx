"use client"
import React from 'react'
import MatchPanel from './components/MatchPanel'
import UserPanel from "./components/UserPanel";

function page() {
    const handleViewDetails = () => {
        console.log("View Details clicked");
      };
  return (
    <>
    <MatchPanel
      team1Image="/assets/images/team-1.png"
      team2Image="/assets/images/team-2.png"
      date={new Date(2025, 1, 19)} 
      time="20:00"
      onViewDetails={handleViewDetails}
    />
       <UserPanel/>
    </>
  )
}

export default page
