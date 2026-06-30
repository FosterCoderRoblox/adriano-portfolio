import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "../../constants";
import { Icon } from "@/components/Icons";
import styles from "./Profiles.module.scss";

const Profiles = () => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    try {
      // Try countapi first
      fetch("https://api.countapi.xyz/hit/adriano-coderfoster/pageviews")
        .then(res => res.json())
        .then(data => {
          if (data && data.value) setVisits(data.value);
        })
        .catch(() => {
          // Fallback: use localStorage as local counter
          const stored = parseInt(localStorage.getItem("site_visits") || "0") + 1;
          localStorage.setItem("site_visits", stored);
          setVisits(stored);
        });
    } catch {
      setVisits(1);
    }
  }, []);

  return (
    <div className={styles.profile}>
      {SOCIAL_LINKS &&
        SOCIAL_LINKS.map(({ name, url }) => (
          <a
            href={url}
            key={name}
            className="link"
            rel="noreferrer"
            target="_blank"
            aria-label={name}
          >
            <Icon name={name} />
          </a>
        ))}

      <div className={styles.visitCounter}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <span>{visits !== null ? visits.toLocaleString() : "..."}</span>
      </div>
    </div>
  );
};

export default Profiles;
