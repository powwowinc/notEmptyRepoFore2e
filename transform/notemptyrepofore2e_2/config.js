'use strict';
module.exports = {
    // startURL - URL to start the transform at.
    startURL: 'http://ec2-18-207-195-205.compute-1.amazonaws.com:5000/opened.html',
    eventDetection: {
        // debounceTime - Detect changes once there have been no events for this long
        debounceTime: 500,
        // throttleTime - Batch together events that occur less than this far apart  (remove to use debouncing instead)
        throttleTime: 500,
        // debug - Print out extra debugging information.
        debug: false,
        // networkDebug - Print out network traffic messages.
        networkDebug: false,
        // verbose - Print out a lot of extra debugging information (Headless Chrome parameters)
        verbose: false,
        // Exceptions to normal event detection rules.
        exceptions: {}
    },
    // firstEvent - First event to match - a regex.  Until this event is found, nothing will be matched.
    // firstEvent: /login\.*/,
    //
    // debounceEvents - Map of regex string to a timeout in milliseconds. When one of these events
    // is found, the event won't be detected until it has stopped firing for this period of time. This is
    // for events that fire sporadically but should only be detected once they stop firing
    // debounceEvents: {
    //     "/fallback\.event/": 500
    // },
    //
    // alwaysFire - Array of events to always fire event detection for (even if data is the same.)
    // alwaysFire: [
    //     "login.error"
    // ]
    // ******* User Agent *******
    // userAgentSuffix - Suffix to add to the user agent string.
    userAgentSuffix: 'Powwow/1.0',
    // userAgentReplacement - Replacement of the user agent string with something else entirely.
    // userAgentReplacement: "Custom user agent string goes here",
    //
    // Viewport configuration
    viewportSize: {
        width: 1024,
        height: 768
    },
    autoResize: true,
    // Pass along cookies that are given via the command line to the transform.
    useCookies: true
};