import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import './SkillsContainer.css'

const Skills = () => {
    if (!skills.length) return null

    return (
        <div className='skills'>
            <div className='projects__grid'>
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <ul className='skills__list'>
                {skills.map((skill) => (
                    <li key={uniqid()} className='skills__list-item btn btn--plain'>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
            </div>
        </div>
    )
}

export default Skills
