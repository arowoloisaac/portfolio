import { useEffect, useState } from "react";

const useRole = () => {
  const roles: string[] = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Software Analyst",
    "System Analyst",
    "Software Architect",
    "Software Tester",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");

  const typingSpeed = 80;
  const totalCycle = 8000;

  useEffect(() => {
    setCharIndex(0);
    setDisplayedRole("");
  }, [roleIndex]);

  useEffect(() => {
    const role = roles[roleIndex];
    if (charIndex < role.length) {
      const t = setTimeout(() => {
        setDisplayedRole((prev) => prev + role.charAt(charIndex));
        setCharIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    }

    const typingDuration = role.length * typingSpeed;
    const pauseAfterTyping = Math.max(800, totalCycle - typingDuration); // at least 800ms
    const pause = setTimeout(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, pauseAfterTyping);

    return () => clearTimeout(pause);
  }, [charIndex, roleIndex, roles]);

  return {roleIndex, displayedRole};
};

export default useRole;