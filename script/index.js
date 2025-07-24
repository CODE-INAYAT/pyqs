//Alert function activated when whatsapp close button is clicked
window.addEventListener("DOMContentLoaded", function () {
  const alertElement = document.getElementById("alert-border-3");
  const dismissButton = alertElement.querySelector(
    '[data-dismiss-target="#alert-border-3"]'
  );
  let timerStarted = false;
  let autoCloseTimer = null;
  // Function to check if element is visible
  function isElementVisible(el) {
    const style = window.getComputedStyle(el);
    return style.display !== "none" && style.visibility !== "hidden";
  }
  // Function to start the auto-close timer and animations
  function startAlertTimer() {
    if (timerStarted) return; // Prevent multiple timers
    timerStarted = true;
    // Add fade-in animation
    alertElement.classList.add("fade-in", "show");
    alertElement.classList.remove("fade-out");
    // Start the timer for fade-out and removal
    autoCloseTimer = setTimeout(function () {
      closeAlert();
    }, 6300); // Display duration before starting fade-out
  }
  // Function to close the alert
  function closeAlert() {
    // Clear any existing timer
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer);
    }
    // Start fade-out animation
    alertElement.classList.remove("fade-in");
    alertElement.classList.add("fade-out");
    // Remove element after animation completes
    setTimeout(function () {
      alertElement.remove();
    }, 500); // Matches the fade-out animation duration
  }
  // Create a MutationObserver to watch for style/display changes
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" ||
        mutation.attributeName === "class"
      ) {
        if (isElementVisible(alertElement) && !timerStarted) {
          startAlertTimer();
        }
      }
    });
  });
  // Add click event listener to dismiss button
  dismissButton.addEventListener("click", function () {
    closeAlert();
  });
  // Start observing the alert element for style and class changes
  observer.observe(alertElement, {
    attributes: true,
    attributeFilter: ["style", "class"],
  });
  // Check initial state
  if (isElementVisible(alertElement) && !timerStarted) {
    startAlertTimer();
  }
});
//Ordinary alert function when whatsapp modal is removed
// window.addEventListener('DOMContentLoaded', function () {
//     var alertElement = document.getElementById('alert-border-3');
//     alertElement.classList.add('fade-in', 'show');

//     setTimeout(function () {
//         alertElement.classList.remove('fade-in');
//         alertElement.classList.add('fade-out');
//         setTimeout(function () {
//             alertElement.remove();
//         }, 500);
//     }, 6300);
// });

///WhatsApp Group Join does not required checkbox code in html///
document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    const closeModalBtn = document.getElementById('closeModal');
    const whatsappLink = document.getElementById('whatsappLink');
    const alertElement = document.getElementById("alert-border-3");

    // Function to show the modal
    function showModal() {
        // Always display the modal
        contactModal.style.display = 'flex';
    }

    // Function to close the modal
    function closeModal() {
        // Simply hide the modal
        contactModal.style.display = 'none';
        alertElement.style.display = "flex";
        scrollToTop();
    }

    // Function to scroll to modal
    function scrollToModal() {
        // Check if modal is visible
        if (contactModal.style.display === 'flex') {
            // Calculate the scroll position to center the modal vertically
            const modalRect = contactModal.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const modalHeight = modalRect.height;

            // Calculate the scroll position to center the modal
            const scrollPosition =
                modalRect.top +
                window.pageYOffset -
                (viewportHeight - modalHeight) / 2;

            // Smooth scroll to the calculated position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }

//Scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

    // Ensure WhatsApp link opens in new tab
    whatsappLink.setAttribute('target', '_blank');
    whatsappLink.setAttribute('rel', 'noopener noreferrer');

    // Event listener for close button
    closeModalBtn.addEventListener('click', closeModal);

    // Show modal on page load
    showModal();

    // Window onload to handle scrolling after all content is loaded
    window.onload = () => {
        setTimeout(scrollToModal, 500);
    };
});

//Animation on whatsapp texts
document.addEventListener("DOMContentLoaded", function () {
  const stackAnimation = document.querySelector(".stack-animation");
  const spans = stackAnimation.querySelectorAll("span");

  // Set initial index for each span
  spans.forEach((span, index) => {
    span.style.setProperty("--index", index);
  });

  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is visible in viewport
          stackAnimation.classList.add("animate");
        } else {
        }
      });
    },
    {
      threshold: 0.99, // Trigger when 99% of the element is visible
    }
  );

  // Start observing the element
  observer.observe(stackAnimation);
});
//Commented previous animation function (Start)//
// document.addEventListener("DOMContentLoaded", function () {
//   const stackAnimation = document.querySelector(".stack-animation");
//   const spans = stackAnimation.querySelectorAll("span");

//   spans.forEach((span, index) => {
//     span.style.setProperty("--index", index);
//   });

//   stackAnimation.classList.add("animate");
// });
//Commented previous animation function (end)//

///WhatsApp Group Join required checkbox code in html///
// document.addEventListener('DOMContentLoaded', () => {
//     const contactModal = document.getElementById('contactModal');
//     const closeModalBtn = document.getElementById('closeModal');
//     const whatsappLink = document.getElementById('whatsappLink');
//     const disableModalCheckbox = document.getElementById('disableModalCheckbox');

//     // Function to check if modal should be shown
//     function shouldShowModal() {
//         // Check localStorage for hidden flag
//         return !localStorage.getItem('whatsappModalHidden');
//     }

//     // Function to show the modal
//     function showModal() {
//         if (shouldShowModal()) {
//             contactModal.style.display = 'flex';
//         } else {
//             contactModal.style.display = 'none';
//         }
//     }

//     // Function to close the modal
//     function closeModal() {
//         // Check if checkbox is checked to permanently hide
//         if (disableModalCheckbox.checked) {
//             localStorage.setItem('whatsappModalHidden', 'true');
//         }

//         // Hide the modal
//         contactModal.style.display = 'none';
//     }

//     // Function to scroll to modal
//     function scrollToModal() {
//         // Check if modal is visible
//         if (contactModal.style.display === 'flex') {
//             // Calculate the scroll position to center the modal vertically
//             const modalRect = contactModal.getBoundingClientRect();
//             const viewportHeight = window.innerHeight;
//             const modalHeight = modalRect.height;

//             // Calculate the scroll position to center the modal
//             const scrollPosition =
//                 modalRect.top +
//                 window.pageYOffset -
//                 (viewportHeight - modalHeight) / 2;

//             // Smooth scroll to the calculated position
//             window.scrollTo({
//                 top: scrollPosition,
//                 behavior: 'smooth'
//             });
//         }
//     }

//     // Ensure WhatsApp link opens in new tab
//     whatsappLink.setAttribute('target', '_blank');
//     whatsappLink.setAttribute('rel', 'noopener noreferrer');

//     // Event listener for close button
//     closeModalBtn.addEventListener('click', closeModal);

//     // Show modal on page load
//     showModal();

//     // Window onload to handle scrolling after all content is loaded
//     window.onload = () => {
//         setTimeout(scrollToModal, 500);
//     };
// });

//RCR
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
});

//DMR win&Max
document.addEventListener('keydown', function (e) {
    // Disable F12 key (developer tools)
    if (e.keyCode === 123) {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I and Ctrl+Shift+J (developer tools) for Windows
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
    // Disable Command+Option+I and Command+Option+J (developer tools) for macOS
    if (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
    // Disable Ctrl+U (view source) for Windows
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
    // Disable Command+Option+U (view source) for macOS
    if (e.metaKey && e.altKey && e.keyCode === 85) {
        e.preventDefault();
    }
});

//SSR
document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are not allowed on this page.');
    }
});

//Ctr+P RES. win&Mac
document.addEventListener('keydown', function (e) {
    // Check for Ctrl+P on Windows and Command+P on macOS
    if ((e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
        e.preventDefault();
        alert('Printing is disabled on this page.');
    }
});


//Switch Functionality
document.addEventListener("DOMContentLoaded", function () {
  const firstYear = document.getElementById("firstYear");
  const secondYear = document.getElementById("secondYear");
  const firstYearUpload = document.getElementById("firstYearUpload");
  const secondYearUpload = document.getElementById("secondYearUpload");
  const switchButtonContainer = document.getElementById(
    "switchButtonContainer"
  );
  const switchButton = document.getElementById("switchButton");
  const closeSwitchModal = document.getElementById("closeSwitchModal");
  const switchModal = document.getElementById("switchModal");

  const switchSpan = document.getElementById("switch");
  const switchSvg = switchSpan ? switchSpan.querySelector("svg") : null;

  // URL mappings for each radio button
  const urlMappings = {
    firstYear: "https://pyqs-isk.pages.dev",
    secondYear: "https://rpsa-isk.pages.dev",
    firstYearUpload: "https://1yr-pyqsupload-isk.pages.dev",
    secondYearUpload: "https://rpsaupload-isk.pages.dev",
  };

  // Function to show the modal
  function showModal() {
    switchModal.classList.remove("hidden");
    switchModal.style.display = "flex";

    const modalContent = switchModal.querySelector(".bg-gray-800");
    const modalOverlay = switchModal.querySelector(".fixed.inset-0");

    // Initially hide overlay with starting state
    if (modalOverlay) {
      modalOverlay.style.opacity = "0";
      modalOverlay.style.transform = "scale(1.1)";
      modalOverlay.style.filter = "blur(8px)";
    }

    // Initial state for modal content (stack-out animation)
    if (modalContent) {
      modalContent.style.opacity = "0";
      modalContent.style.transform = "scale(0.8) translateY(20px)";
      modalContent.style.transition =
        "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    }

    // First animate the modal content
    setTimeout(() => {
      if (modalContent) {
        modalContent.style.opacity = "1";
        modalContent.style.transform = "scale(1) translateY(0px)";
      }

      // Then apply overlay effect after a short delay
      setTimeout(() => {
        if (modalOverlay) {
          modalOverlay.style.transition =
            "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          modalOverlay.style.opacity = "1";
          modalOverlay.style.transform = "scale(1)";
          modalOverlay.style.filter = "blur(0px)";
        }
      }, 150);
    }, 10);

    // Enhanced auto-scroll to center modal perfectly
    setTimeout(() => {
      centerModalOnScreen();
    }, 50);
  }

  // Enhanced function to center modal perfectly on screen
  function centerModalOnScreen() {
    const modalContent = switchModal.querySelector(".bg-gray-800");
    if (modalContent) {
      const rect = modalContent.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const modalHeight = rect.height;

      // Calculate the exact center position
      const currentModalCenter = rect.top + modalHeight / 2;
      const desiredModalCenter = viewportHeight / 2;
      const scrollAdjustment = currentModalCenter - desiredModalCenter;

      // Only scroll if the modal isn't already perfectly centered (with 50px tolerance)
      if (Math.abs(scrollAdjustment) > 50) {
        const targetScrollY = window.pageYOffset + scrollAdjustment;

        // Enhanced smooth scroll with custom easing
        const startScrollY = window.pageYOffset;
        const distance = targetScrollY - startScrollY;
        const duration = 800; // Longer scroll
        let startTime = null;

        function animateScroll(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          // Custom easing function (ease-out-cubic)
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);

          const currentScrollY = startScrollY + distance * easeOutCubic;
          window.scrollTo(0, currentScrollY);

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        }

        requestAnimationFrame(animateScroll);
      }
    }
  }

  // Function to show switch button with animation
  function showSwitchButton(url) {
    switchButton.href = url;

    // If button is already visible, show selection change animation
    if (!switchButtonContainer.classList.contains("hidden")) {
      // Quick pulse and color change animation for selection change
      switchButton.style.transition = "all 0.2s ease-in-out";
      switchButton.style.transform = "scale(0.95)";
      switchButton.style.backgroundColor = "#059669"; // darker green

      setTimeout(() => {
        switchButton.style.transform = "scale(1.05)";
        switchButton.style.backgroundColor = "#10b981"; // brighter green
      }, 100);

      setTimeout(() => {
        switchButton.style.transform = "scale(1)";
        switchButton.style.backgroundColor = ""; // reset to default
        switchButton.style.transition = "";
      }, 300);
    } else {
      // Initial show animation
      switchButtonContainer.classList.remove("hidden");

      // Enhanced entrance animation with multiple effects
      switchButton.style.transform = "scale(0.8) rotateX(90deg)";
      switchButton.style.opacity = "0";
      switchButton.style.transition =
        "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

      // Trigger animation after a small delay to ensure the element is rendered
      setTimeout(() => {
        switchButtonContainer.classList.remove("opacity-0", "translate-y-4");
        switchButtonContainer.classList.add("opacity-100", "translate-y-0");

        switchButton.style.transform = "scale(1) rotateX(0deg)";
        switchButton.style.opacity = "1";

        // Add a subtle glow effect
        setTimeout(() => {
          switchButton.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.4)";
          setTimeout(() => {
            switchButton.style.boxShadow = "";
            switchButton.style.transition = "";
          }, 800);
        }, 200);
      }, 10);
    }
  }

  // Function to hide switch button with enhanced animation
  function hideSwitchButton() {
    // exit animation
    switchButton.style.transition =
      "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    switchButton.style.transform = "scale(0.7) rotateX(-90deg)";
    switchButton.style.opacity = "0";

    switchButtonContainer.classList.remove("opacity-100", "translate-y-0");
    switchButtonContainer.classList.add("opacity-0", "translate-y-4");

    // Hide the element after animation completes
    setTimeout(() => {
      switchButtonContainer.classList.add("hidden");

      // Reset button state
      switchButton.style.transform = "scale(1) rotateX(0deg)";
      switchButton.style.opacity = "1";
      switchButton.style.transition = "";
    }, 400);
  }

  // Add event listeners to switch trigger elements
  if (switchSpan) {
    switchSpan.addEventListener("click", function (e) {
      e.preventDefault();
      showModal();
    });
  }

  if (switchSvg) {
    switchSvg.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      showModal();
    });
  }

  // Add event listeners to radio buttons
  if (firstYear) {
    firstYear.addEventListener("change", function () {
      if (this.checked) {
        showSwitchButton(urlMappings.firstYear);
      }
    });
  }

  if (secondYear) {
    secondYear.addEventListener("change", function () {
      if (this.checked) {
        showSwitchButton(urlMappings.secondYear);
      }
    });
  }

  if (firstYearUpload) {
    firstYearUpload.addEventListener("change", function () {
      if (this.checked) {
        showSwitchButton(urlMappings.firstYearUpload);
      }
    });
  }

  if (secondYearUpload) {
    secondYearUpload.addEventListener("change", function () {
      if (this.checked) {
        showSwitchButton(urlMappings.secondYearUpload);
      }
    });
  }

  // Close modal functionality
  if (closeSwitchModal) {
    closeSwitchModal.addEventListener("click", function () {
      const modalContent = switchModal.querySelector(".bg-gray-800");
      const modalOverlay = switchModal.querySelector(".fixed.inset-0");

      // First create overlay fade-out with reverse effects
      if (modalOverlay) {
        modalOverlay.style.transition =
          "all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53)";
        modalOverlay.style.opacity = "0";
        modalOverlay.style.transform = "scale(1.05)";
        modalOverlay.style.filter = "blur(4px)";
      }

      // Then animate modal content with enhanced stack-in effect
      setTimeout(() => {
        if (modalContent) {
          modalContent.style.transition =
            "all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
          modalContent.style.opacity = "0";
          modalContent.style.transform =
            "scale(0.65) translateY(-40px) rotateX(10deg)";
        }
      }, 100);

      // Hide modal after all animations complete
      setTimeout(() => {
        switchModal.classList.add("hidden");
        switchModal.style.display = "none";

        // Reset modal state for next opening
        if (modalContent) {
          modalContent.style.opacity = "1";
          modalContent.style.transform =
            "scale(1) translateY(0px) rotateX(0deg)";
          modalContent.style.transition = "";
        }

        if (modalOverlay) {
          modalOverlay.style.opacity = "1";
          modalOverlay.style.transform = "scale(1)";
          modalOverlay.style.filter = "blur(0px)";
          modalOverlay.style.transition = "";
        }

        // Reset radio buttons and hide switch button
        const radioButtons = document.querySelectorAll(
          'input[name="default-radio"]'
        );
        radioButtons.forEach((radio) => (radio.checked = false));
        hideSwitchButton();
      }, 450);
    });
  }

  // Close modal when clicking outside of it
  if (switchModal) {
    switchModal.addEventListener("click", function (e) {
      if (e.target === switchModal || e.target.classList.contains("fixed")) {
        if (closeSwitchModal) {
          closeSwitchModal.click();
        }
      }
    });
  }

  // Provides flexibility for multiple switch elements
  const switchTriggers = document.querySelectorAll(".switch-trigger");
  switchTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      showModal();
    });
  });
});
