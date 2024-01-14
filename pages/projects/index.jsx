

// const GitRecentProjects   = dynamic(import ('../../src/components/sections/projects/recent'));
const FeaturedProjects  = dynamic(import ( '../../src/components/sections/projects/featured'));
import dynamic from "next/dynamic";

import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/projects/_colors.json'
import TitleProjects from "./title.projects";

// this is the project page
export default function Projects({ user, repos }) {
	return (
		<>
		<TitleProjects/>
		<Color colors={colors} />
		<FeaturedProjects />
		</>
	)
}

