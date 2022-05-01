import React from "react"
import { Link, graphql  }  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About Me</h1>
            <p>{`${name} is a top realtor at ${company}.`}</p>
            <p>{`At ${company} we provide exceptional service, availability, knowledge, and great negotiation skills should be your minimum expectations when working with ANY real estate agent.`}</p>
            <p></p>
            <p>{`Our process has been reElevated using the most optimized technology tools. With that said, it allows our agents to FOCUS on elevating your experience while together we achieve YOUR goal making sure YOU stay informed of EVERYTHING.`}</p>

            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`

    query {
	site{
		siteMetadata{
			contact {
				name
                company
                address
      }
    }
  }
}
`