/**
 * Shortcode for displaying local videos
 * @param {string} src - Filename in /src/videos/
 * @param {string} poster - Filename in /src/videos/
 * @param {string} alt - Accessibility description
 * @param {boolean} isSilent - If true, shows "No audio" note and adds to ARIA label
 * @param {boolean} isMuted - If true, adds the 'muted' attribute to the video tag
 */
export const videoShortcode = function (src, poster, alt, isSilent, isMuted) {
  const muteAttr = isMuted ? 'muted' : '';
  const silentNote = isSilent 
    ? `<p class="video-caption" aria-hidden="true">Note: This video has no audio.</p>` 
    : '';
  const a11ySuffix = isSilent ? ' (Silent video)' : '';

  return `
    <div class="video-container">
      <video 
        width="100%" 
        height="auto" 
        controls 
        preload="metadata" 
        ${muteAttr}
        poster="/videos/${poster}" 
        aria-label="${alt}${a11ySuffix}">
        <source src="/videos/${src}" type="video/mp4">
        <p class="video-caption" style="color: var(--color-text, #2e2e2e); background-color: var(--color-bg, #ffffff); padding: 1rem; border: 1px solid var(--color-primary, #4d6d31);">
          Your browser doesn't support HTML5 video. 
          Here is a <a href="/videos/${src}" style="color: var(--color-primary, #4d6d31); text-decoration: underline; font-weight: bold;">link to the video file</a> instead.
        </p>
      </video>
      ${silentNote}
    </div>
  `;
};
