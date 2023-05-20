import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "NFT Dapp",
    imgSrc: "project-imgs/nft-site.png",
    code: "https://github.com/JoWinner/nft-landing-page",
    projectLink: "https://biancaalliance.netlify.app",
    tech: ["HTML", "Javascript", "CSS", "SCSS"],
    description:
      "This is an awesome landing page for a web3 project integrating beautiful showcase of what the community should expect from the NFT project.",
    modalContent: (
      <>
        <p>
          The biancaalliance website is a unique design solely made for this NFT
          project, from frame designing to development.
        </p>
        <p>
          The tech stack is based on top of HTML, CSS for designing all the
          components to fit the niche of the site and using Javascript for some
          amazing functionalities.
        </p>
        <p>
          The layout is fully responsive. Whether on mobile or larger screens
          interactivity and look and feel doesn&apos;t change for any user.
        </p>
        <p>
          Checkout the biancaalliance site and confirm professionalism at work
          {":)"}
        </p>
      </>
    ),
  },
  {
    title: "Builder Site",
    imgSrc: "project-imgs/builder-site.png",
    code: "https://github.com/JoWinner/builder-site",
    projectLink: "https://builder-site-navy.vercel.app/",
    tech: ["Vite", "React", "Tailwind Css"],
    description:
      "Builder is construction website with some beautiful components to expressing the kinds of projects the agency delivers to their clients.",
    modalContent: (
      <>
        <p>
          This construction website has some of the best construction website
          designs. As soon as you land on the homepage, you&apos;re met with a
          sleek motion design that easily takes users through the page.
          It&apos;s not clunky or awkward, either—it&apos;s seamless and
          logical, taking users through each section that&apos;s key to the
          customer experience.
        </p>
        <p>
          Construction companies pride themselves on the work they do, and
          it&apos;s important for them to showcase that great work. The builder
          site completely gets that concept and highlights the works well on
          their showcase page.
        </p>
        <p>
          Above everything else visitors can immediately get in touch with the
          agency by various means.
        </p>
      </>
    ),
  },
  {
    title: "Movie-page",
    imgSrc: "project-imgs/movie-page.png",
    code: "https://github.com/JoWinner/movie-page",
    projectLink: "https://movie-page-five.vercel.app/",
    tech: ["React JS", "CSS", "omdbapi"],
    description:
      "This is concept project for fetching movies. With a clean and attractive design users can make searches for any kind of movie.",
    modalContent: (
      <>
        <p>
          Movie-page makes api calls by the search to fetch movies and display
          details of the movie.
        </p>
        <p>
          This needs upgrading in the future by integrating other components and
          functionalities to make it more lively than it is now.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/mint-dapp.png",
    code: "https://github.com/JoWinner/nft-erc721-collection",
    projectLink: "https://mint-bianca.netlify.app/",
    tech: ["HTML", "Solidity", "Javascript", "SCSS"],
    description:
      "The Mint-dapp is the core of the NFT collection minting. Powered by the blockchain, it seamlessly allows collection of NFTs",
    modalContent: (
      <>
        <p>
          This minting dapp connects web3 users to the blockchain on the
          polygon-ethereum network. With a smart contract o perform trustless
          operations, users can interact with the blockchain buying,owning and
          selling their NFTs.
        </p>
        <p>
          It can accept whitelisting and adjust the price accordingly. Every
          mint is push directly to opensea ready to be listed.
        </p>
        <p>Web3 and smart contracts are awesome and exciting {":)"}</p>
      </>
    ),
  },
];
