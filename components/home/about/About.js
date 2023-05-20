import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Joshua, if you haven&apos;t already gathered that by
              now. In the ever-evolving digital landscape, I am a dedicated web
              developer passionate about crafting exceptional online
              experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              With expertise in front-end and back-end development, I have a
              keen eye for detail and a commitment to delivering high-quality
              websites. My goal is to combine creativity with technical skills
              to build visually stunning and functional websites that captivate
              users.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              From responsive design to seamless navigation, I&apos;m passively
              looking for new positions where I can merge my love for code to
              create intuitive and engaging interfaces that leave a lasting
              impression. Let&apos;s collaborate and bring your ideas to life in
              the digital realm.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you think you&apos;ve got an opening that I might like,
              let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
