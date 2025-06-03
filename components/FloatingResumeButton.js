import React from 'react';

export default function FloatingResumeButton() {
  return (
    <div className="floating-resume-button">
      <a href="https://jonny.sh/resume.pdf" target="_blank" className="project-link">
        <img src="/assets/img/icons/resume.png" alt="Resume" />
        Get my Latest Resume
      </a>
    </div>
  );
}
