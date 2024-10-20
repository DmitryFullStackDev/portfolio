import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Redux</span>
            <span className="chip">Styled-components</span>
            <span className="chip">Mui</span>
            <span className="chip">Nest.js</span>
            <span className="chip">Express</span>
            <span className="chip">Firebase</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Vercel</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>+</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Git</span>
            <span className="chip">Figma</span>
            <span className="chip">Webpack</span>
            <span className="chip">Parcel</span>
            <span className="chip">Rollup</span>
            <span className="chip">Yarn</span>
            <span className="chip">Npm</span>
            <span className="chip">Eslint</span>
            <span className="chip">Stylelint</span>
            <span className="chip">Prettier</span>
            <span className="chip">Babel</span>
            <span className="chip">Jest</span>
            <span className="chip">Enzyme</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
