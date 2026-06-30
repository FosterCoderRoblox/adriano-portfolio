import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes }) => {
  const projectCard = useRef(null);
  const { name, imageKey, description, gradient, url, isCustomImage, fullCover } = project;
  const image = PROJECT_IMAGES[imageKey];

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <a
      href={url || undefined}
      className={`overflow-hidden rounded-3xl snap-start link ${classes || ""}`}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        {fullCover ? (
          // Full cover image — fills entire card, text overlaid
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={typeof image === "string" ? image : image?.src}
              alt={name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "1.5rem",
              }}
            />
            {/* dark overlay so text is readable */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)",
              borderRadius: "1.5rem",
              zIndex: 1,
            }} />
          </>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/project-bg.svg"
              alt=""
              className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl"
              style={{ objectFit: "cover" }}
            />
            {(isCustomImage) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={typeof image === "string" ? image : image?.src}
                alt={name}
                className={styles.projectImage}
                style={{ objectFit: "cover", position: "absolute", inset: 0, width: "100%", height: "100%" }}
              />
            )}
          </>
        )}
        <h3
          className="font-medium text-2xl sm:text-3xl pl-2 pt-2 transform-gpu text-white"
          style={{ transform: "translateZ(3rem)", position: "relative", zIndex: 2 }}
        >
          {name}
        </h3>
        <p
          className="text-lg tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)", position: "relative", zIndex: 2 }}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectTile;
