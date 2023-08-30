import uniqid from 'uniqid'
import {skills, techSkills, vocationalSkills} from '../../portfolio'
import './Skills.pcss'
import './SkillsContainer.pcss'

const Skills = () => {
    if (!skills.length) return null

    return (
        <div className='skills'>
            <h2 className='skills__title'>Skills</h2>
            <div className='skills__grid'>
                <section className='section skills' id='skills'>
                    <h2 className='skillsSection__title'>Programming</h2>
                    <ul className='skills__list'>
                        {skills.map((skill) => (
                            <li key={uniqid()} className='skills__list-item btn btn--plain'>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='section skills' id='skills'>
                    <h2 className='skillsSection__title'>Technology</h2>
                    <ul className='skills__list'>
                        {techSkills.map((skills) => (
                            <li key={uniqid()} className='skills__list-item btn btn--plain'>
                                {skills}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='section skills' id='skills'>
                    <h2 className='skillsSection__title'>Vocational</h2>
                    <ul className='skills__list'>
                        {vocationalSkills.map((skills) => (
                            <li key={uniqid()} className='skills__list-item btn btn--plain'>
                                {skills}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Skills
