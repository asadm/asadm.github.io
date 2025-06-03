import React from 'react';

export default function FloatingResumeButton() {
  return (
    <div className="floating-resume-button">
      <a href="https://jonny.sh/resume.txt" target="_blank" className="project-link">
        <img src="/assets/img/icons/resume.png" alt="Resume" loading="eager" />
        Get my Latest Resume
      </a>
    </div>
  );
}
