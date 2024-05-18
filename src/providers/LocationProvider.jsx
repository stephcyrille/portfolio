import React from "react";
import { AnimatePresence } from "framer-motion";

export const LocationProvider = ({children}) => {
    return <AnimatePresence>{children}</AnimatePresence>;
}