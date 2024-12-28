import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易用',
   // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        只要是碳基生物就可以看懂！
      </>
    ),
  },
  {
    title: '更新迅速',
   // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        新内容出来后会更新，什么时候更新不知道了，反正会更新。
      </>
    ),
  },
  {
    title: '超级省钱',
  //  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        本站由 Vercel 驱动，完全免费，不花一分钱。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
