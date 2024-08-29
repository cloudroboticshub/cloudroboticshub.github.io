import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Frequently Updated Blog',
    Svg: require('@site/static/img/noun-blog-7024995.svg').default,
    description: (
      <>
        Published blogs with recent talks and news from the Cloud Robotics Working Group.
        Blog by Dierys Design from <a href="https://thenounproject.com/browse/icons/term/blog/" target="_blank" title="Blog Icons">Noun Project</a> (CC BY 3.0)
      </>
    ),
  },
  {
    title: 'Cloud Robotics Resources',
    Svg: require('@site/static/img/noun-artificial-intelligence-2366500.svg').default,
    description: (
      <>
        Find the best online resources available, curated by the Working Group.
        Artificial Intelligence by ProSymbols from <a href="https://thenounproject.com/browse/icons/term/artificial-intelligence/" target="_blank" title="Artificial Intelligence Icons">Noun Project</a> (CC BY 3.0)
      </>
    ),
  },
  {
    title: 'State of Cloud Robotics',
    Svg: require('@site/static/img/noun-survey-7048795.svg').default,
    description: (
      <>
        See the latest crowd-sourced knowledge from the State of Cloud Robotics survey. 
        Survey by Kartika Sholehatin from <a href="https://thenounproject.com/browse/icons/term/survey/" target="_blank" title="Survey Icons">Noun Project</a> (CC BY 3.0)
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
