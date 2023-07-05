import React, { useEffect, useState } from 'react'
import Parallax from '../Parallax'
import WorksSection from '../WorksSection'
import ContactSection from '../ContactSection'
import ExperienceSection from '../ExperienceSection'
import SkillsSection from '../SkillsSection'
import AboutSection from '../AboutSection'
import HomeSection from '../HomeSection'
import Layout from '../../layout/Layout'
import axios from 'axios';
// import { useParams } from 'react-router-dom';
const base64 = require('js-base64').Base64;
function PortfolioHome() {
    const [user, setUser] = useState(null)
    // let { githubName } = useParams();
    let githubName = 'devadula-nandan';
    const getUser = async () => {
        try {

            const { data } = await axios.get(`https://api.github.com/repos/${githubName}/Portfolio_react_app/readme`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                },
            });
            const readmeContent = base64.decode(data.content);
            const match = readmeContent.split('\n')[1].match(/<!--\s*'(.*)'\s*-->/);
            if (match) {
                const jsonData = JSON.parse(match[1].replace(/\\(.)/g, '$1'));
                setUser(jsonData.user)
                // console.log(jsonData.user);
            }

        } catch (error) {
            console.error(`Failed to fetch repos:`, error);
        }

    }
    useEffect(() => {
        getUser()
    }, [])
    return (

        <Layout firstName={user?.firstName} >
            <div className="bg-base-100 scroll-smooth pb-24 px-0 md:px-6">
                <Parallax>
                    <HomeSection user={user} />
                </Parallax>
                <AboutSection user={user} />
                <SkillsSection skills={user?.specificSkills} />
                <ExperienceSection experience={user?.experience} />
                <WorksSection works={user?.works} />
                <ContactSection />
            </div>
        </Layout>
    )
}

export default PortfolioHome