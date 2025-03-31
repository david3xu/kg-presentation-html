/**
 * Handles fullscreen functionality for the presentation
 */
document.addEventListener('DOMContentLoaded', function() {
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const container = document.documentElement;

  // Function to toggle fullscreen
  function toggleFullScreen() {
      if (!document.fullscreenElement && 
          !document.mozFullScreenElement && 
          !document.webkitFullscreenElement && 
          !document.msFullscreenElement) {
          // Enter fullscreen
          if (container.requestFullscreen) {
              container.requestFullscreen();
          } else if (container.msRequestFullscreen) {
              container.msRequestFullscreen();
          } else if (container.mozRequestFullScreen) {
              container.mozRequestFullScreen();
          } else if (container.webkitRequestFullscreen) {
              container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
          fullscreenBtn.querySelector('.fullscreen-icon').textContent = '⛶';
      } else {
          // Exit fullscreen
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
          }
          fullscreenBtn.querySelector('.fullscreen-icon').textContent = '⛶';
      }
  }

  // Add click event listener to fullscreen button
  if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', toggleFullScreen);
  }

  // Add keyboard shortcut (F11 or F)
  document.addEventListener('keydown', function(e) {
      if (e.key === 'F11' || (e.key.toLowerCase() === 'f' && !(e.ctrlKey || e.metaKey))) {
          e.preventDefault();
          toggleFullScreen();
      }
  });

  // Update button icon when fullscreen changes
  document.addEventListener('fullscreenchange', updateFullscreenButton);
  document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
  document.addEventListener('mozfullscreenchange', updateFullscreenButton);
  document.addEventListener('MSFullscreenChange', updateFullscreenButton);

  function updateFullscreenButton() {
      if (!fullscreenBtn) return;
      
      if (document.fullscreenElement || 
          document.webkitFullscreenElement || 
          document.mozFullScreenElement || 
          document.msFullscreenElement) {
          fullscreenBtn.querySelector('.fullscreen-icon').textContent = '⛶';
      } else {
          fullscreenBtn.querySelector('.fullscreen-icon').textContent = '⛶';
      }
  }
});