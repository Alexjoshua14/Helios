import { useState, useRef } from "react";
import {useScroll, useVelocity, useSpring, useAnimationFrame } from 'framer-motion';


/**
 * Exposes an expand boolean that is true when
 * the user is scrolling up and false when the user is 
 * scrolling down. Note this is throttled and the variable
 * updates at most once per throttle duration.
 * 
 * @param throttleDuration Mininum duration to wait between updates
 * @returns expand boolean
 */
export function useExpand(throttleDuration: number) {
  const [expand, setExpand] = useState(true);
  const [throttled, setThrottle] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  const timerID = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  /**
   * Gets the scroll direction based on velocity
   * 
   * @returns -1 if scrolling up, 0 if stationary, 1 if scrolling down
   */
  const getDirection = () => {
    return smoothVelocity.get() > 0 ? 1 : smoothVelocity.get() < 0 ? -1 : 0;
  }

  /**
   * Updates expand variable with shouldExpand param value.
   * This function is throttled. If we updated the variable
   * within throttleDuration or if we called the function within
   * throttle duration, it waits the throttle duration to update the variable.
   * 
   * @param shouldExpand boolean
   */
  const updateExpand = (shouldExpand: boolean) => {
    if (throttled) {
      // Very recently switched Nav height, 
      // update height after throttle duration
      clearTimeout(timerID.current);

      timerID.current = setTimeout(() => {

        setExpand(shouldExpand);
        setThrottle(false);
        timerID.current = undefined;
      }, throttleDuration);

    } else {
      // Update nav height immediately
      // prevent further updates for 
      // throttle duration
      setExpand(shouldExpand);
      setThrottle(true);

      timerID.current = setTimeout(() => {

        setThrottle(false);
        timerID.current = undefined;
      }, throttleDuration)
    }
  }

  /**
   * Runs once per animation frame. Updates the expand state
   * based on scroll direction detected.
   * 
   */
  useAnimationFrame(() => {
    const direction = getDirection();
    if (direction === 0)
      return;

    // Only trigger expand function when
    // scroll direction and desired expansion are mismatched
    if (direction === -1 && !expand) {
      // Scrolling up and not expanded
      updateExpand(true);
    } else if (direction === 1 && expand) {
      // Scrolling down and expanded
      updateExpand(false)
    } else {
    }

  })

  return [expand]
}