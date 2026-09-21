import { lazy } from "react";

const Feature1 = lazy(() => import("../assets/images/features/Feature1"));
const Feature2 = lazy(() => import("../assets/images/features/Feature2"));
const Feature3 = lazy(() => import("../assets/images/features/Feature3"));
const Feature4 = lazy(() => import("../assets/images/features/Feature4"));
const Feature5 = lazy(() => import("../assets/images/features/Feature5"));
const Feature6 = lazy(() => import("../assets/images/features/Feature6"));
const Feature7 = lazy(() => import("../assets/images/features/Feature7"));
const Feature8 = lazy(() => import("../assets/images/features/Feature8"));

const featuresData = [
    {
        id: 1,
        Icon: Feature1,
        title: "30+ larger than life amenities spread over 3 acres",
        delay: 200,
    },
    {
        id: 2,
        Icon: Feature2,
        title: "4 party lawns and a Grand Clubhouse",
        delay: 300,
    },
    {
        id: 3,
        Icon: Feature3,
        title: "Fully Equipped Indoor Gym & Outdoor Gym",
        delay: 400,
    },
    {
        id: 4,
        Icon: Feature4,
        title: "Temple with leisure lawn",
        delay: 200,
    },
    {
        id: 5,
        Icon: Feature5,
        title: "Separate Tennis & Badminton courts ",
        delay: 300,
    },
    {
        id: 6,
        Icon: Feature6,
        title: "Two cricket nets",
        delay: 400,
    },
    {
        id: 7,
        Icon: Feature7,
        title: "Designer Swimming pool & separate kid’s pool",
        delay: 400,
    },
    {
        id: 8,
        Icon: Feature8,
        title: "MLA design with large room dimensions",
        delay: 400,
    },
];

export default featuresData;
