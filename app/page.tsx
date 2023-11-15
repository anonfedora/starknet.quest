"use client";

import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import FeaturedQuest from "../components/quests/featuredQuest";

import { useRouter } from "next/navigation";
import HowToParticipate from "../components/pages/home/howToParticipate";
import QuestCategories from "../components/pages/home/questCategories";
import TrendingQuests from "../components/pages/home/trending";
import Blur from "../components/shapes/blur";
import { QuestsContext } from "../context/QuestsProvider";

export default function Page() {
  const router = useRouter();
  const { featuredQuest, categories, trendingQuests } =
    useContext(QuestsContext);

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.blur1}>
          <Blur />
        </div>
        <FeaturedQuest
          key={featuredQuest?.id}
          title={featuredQuest?.title_card}
          onClick={() => router.push(`/quest/${featuredQuest?.id}`)}
          imgSrc={featuredQuest?.img_card}
          issuer={{
            name: featuredQuest?.issuer ?? "",
            logoFavicon: featuredQuest?.logo ?? "",
          }}
          reward={featuredQuest?.rewards_title}
          desc={featuredQuest?.desc}
          expiry={featuredQuest?.expiry_timestamp}
        />
        <QuestCategories categories={categories} />
        <div className={styles.blur2}>
          <Blur green />
        </div>
        <TrendingQuests trendingQuests={trendingQuests} />
        <HowToParticipate />
      </div>
    </div>
  );
}

// export default Quests;