import React, { useEffect, useState } from 'react'
import Parallax from '../Parallax'
import WorksSection from '../WorksSection'
import ContactSection from '../ContactSection'
import ExperienceSection from '../ExperienceSection'
import SkillsSection from '../SkillsSection'
import AboutSection from '../AboutSection'
import HomeSection from '../HomeSection'

function Home() {
    return (
        <div className="bg-base-100 scroll-smooth pb-24 px-0 md:px-6">
            <Parallax>
                <HomeSection />
            </Parallax>
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <WorksSection />
            <ContactSection />
        </div>
    )
}

export default Home