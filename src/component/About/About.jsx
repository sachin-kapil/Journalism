import React from "react";
import { Link } from "react-router-dom";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        
                         <img className=" w-96 h-96 rounded-full"
                            src="https://media.istockphoto.com/id/1248531076/photo/handsome-male-reporter-in-live-broadcasting-relays-todays-news.jpg?s=1024x1024&w=is&k=20&c=w9vHPdrZhRgTnCMY4xwsaADPyQ2VlI-AgOrqld-p18g="
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Journalism Unveiled
                        </h2>
                        <h1 className="text-1xl font-semibold ">I am journalistic luminary, has spent decades on the frontline, unraveling stories that echo through the corridors of truth.
                        A maestro in investigative reporting,  My pen has danced across pages, revealing narratives that transcend the ordinary
                        With an unwavering commitment to journalistic integrity, I has carved a legacy, blending curiosity with a profound sense of responsibility.
                        In the world of newsprint,I stands tall, his bylines a testament to a career dedicated to unearthing the stories that matter.
                        As a seasoned journalist, I keen insight and storytelling prowess have painted vivid portraits of societal shifts and cultural nuances.
                        Through the lens of I reporting, the ordinary becomes extraordinary, and the silence of untold stories finds its voice
                        A wordsmith of the highest order, I narratives have the power to captivate minds, weaving a tapestry of facts and emotions
                        In the ever-evolving landscape of journalism, I foresight and adaptability have made him a beacon, guiding the profession into new horizons
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
