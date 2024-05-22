    (function() {
  const popup = document.getElementById('inspect-popup');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.getElementById('close-popup');

  function showPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }

  function hidePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }

  closeButton.addEventListener('click', hidePopup);

  function preventInspect() {
    showPopup();
  }

  // Detect F12, Ctrl+Shift+I, and Ctrl+Shift+C
  document.addEventListener('keydown', function(event) {
    if (
      event.key === 'F12' ||
      (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C'))
    ) {
      preventInspect();
      event.preventDefault();
    }
  });

  // Detect right-click
  document.addEventListener('contextmenu', function(event) {
    preventInspect();
    event.preventDefault();
  });

  // Detect opening developer tools by measuring console size
  (function detectDevTools() {
    const threshold = 160; // Height in pixels when dev tools is docked
    let opened = false;

    function checkDevTools() {
      const height = window.outerHeight - window.innerHeight > threshold;
      if (height && !opened) {
        opened = true;
        preventInspect();
      } else if (!height && opened) {
        opened = false;
      }
    }

    window.addEventListener('resize', checkDevTools);
    checkDevTools();
  })();

  // Disable console.log when developer tools are open
  const devtoolsOpen = /./;
  devtoolsOpen.toString = function() {
    hidePopup(); // Hide the popup if it's open
    return 'The developer tools are currently open.';
  };
  console.log('%c', devtoolsOpen);
})();
