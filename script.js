//your JS code here. If required.
    var userAgent = navigator.userAgent;
        var browserName;
        var version;

        // Detect the browser name and version from the user agent string
        if (userAgent.includes("Chrome")) {
            browserName = "Google Chrome";
            version = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
        } else if (userAgent.includes("Firefox")) {
            browserName = "Mozilla Firefox";
            version = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
        } else if (userAgent.includes("Edge")) {
            browserName = "Microsoft Edge";
            version = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
        } else if (userAgent.includes("Safari")) {
            browserName = "Apple Safari";
            version = userAgent.match(/Version\/(\d+\.\d+)/)[1];
        } else {
            browserName = "Unknown Browser";
            version = "N/A";
        }

        // Display the browser information in the "browser-info" div
        var browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = "You are using " + browserName + " version " + version;
  