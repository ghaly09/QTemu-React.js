import React from "react";
// import "./App.css";
import Navbar from "./components/organisms/Navbar";
import UseCard from "./components/templates/UserCard";
import AboutMeet from "./components/AboutMeet";
import Members from "./components/Members";
import MeetCards from "./components/MeetCards";
import NextMeetup from "./components/NextMeetup";

// import {Navbar, UseCard, AboutMeet, Members, MeetCards, NextMeetup} from "./components"

function App() {
  return (
    <div className="container mx-auto my-3 sm:my-10 rounded-lg shadow-xl ">
      <div className="sticky rounded-t-lg bg-gradient-to-r from-[#155799] to-[#159957]">
        <Navbar />
      </div>
      <UseCard />
      <div className="bg-white rounded-lg">
        <AboutMeet />
        <Members />
        <NextMeetup
          title="Awesome Meetup and Event"
          date="20 March 2023"
          desc="Hello, JavaScript & Node.js Ninjas! Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2023! etting up meetings across multiple timezones is messy and hard task. In this example, built with the Mobiscroll scheduler we've laid out a timeline with multiple resources that represent the teammates. Each team member can be in separate timezones which means we need to account for the various offsets."
          numMembers="300"
        />
        <section className="px-[2rem] sm:px-[10rem] pb-5">
          <h2 className="flex flex-wrap text-2xl py-5 text-slate-800 font-bold font-sans">
            Past Meetups
          </h2>
          <div className="flex overflow-x-scroll gap-5 pb-5">
            <MeetCards
              date="27 November 2022"
              desc="#39 JakartaJS April Meetup with Kumparan"
              lastDays="139"
            />
            <MeetCards
              date="28 Oktober 2022"
              desc="#38 JakartaJS Oktober Meetup with Blibli"
              lastDays="120"
            />
            <MeetCards
              date="20 September 2022"
              desc="#37 JakartaJS September Meetup with Hacktiv8"
              lastDays="119"
            />
            <MeetCards
              date="20 September 2022"
              desc="#37 JakartaJS September Meetup with Hacktiv8"
              lastDays="119"
            />
            <MeetCards
              date="20 September 2022"
              desc="#37 JakartaJS September Meetup with Hacktiv8"
              lastDays="119"
            />
            <MeetCards
              date="20 September 2022"
              desc="#37 JakartaJS September Meetup with Hacktiv8"
              lastDays="119"
            />
          </div>
        </section>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="pb-5 text-sm text-blueGray-500 font-semibold py-1">
              Copyright &copy; 2023 by Rachmat Ghaly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
