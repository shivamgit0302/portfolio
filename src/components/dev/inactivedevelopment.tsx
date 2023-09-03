import Section from '../structure/section';
import Container from '../structure/container';

import css from '../../../assets/styles/scss/sections/projects/featured.module.scss'

{/* in active development */}
interface InactivedevelopmentProps {
	spacing: string[]
}

export default function Inactivedevelopment({spacing}: InactivedevelopmentProps) {
	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={spacing}>
				<h2 className="fullHeight centered">Currently in Development!</h2>
				<style jsx>{`
				.fullHeight {
					min-height: 500px;
					height: 100vh;
					max-height: 1200px;
				}
				.centered {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}