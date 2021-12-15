function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }
  
  
  
  function watermark() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let username = document.getElementById("username").value;
    let version = document.getElementById("versionPublic").value;
    let adminversion = document.getElementById("versionAdmin").value;
    let adminuser = document.getElementById("adminUser").value;
    let divider = ''
    if (version) {
      divider = ' | '
    }
    username === adminuser ? version = adminversion : version = version;
    let time = ' | ' + h + ':' + m + ':' + s;
    if (document.getElementById("timeon").value === 'time off') {
      time = ''
    }
  
    $.getJSON("https://api.ipify.org?format=json", function(data) {
      document.getElementById("ip").value = ' | ' + data.ip
    })
  
    let ip = document.getElementById("ip").value;
  
    if (document.getElementById("ipon").value === 'ip off') {
      ip = ''
    }
    if (version) {
      version = version
    } else {
      version = ''
    }
    if (username) {
      document.getElementById("splash").innerHTML = username + divider + version + time + ip;
    }
    setTimeout(watermark, 1000); {}
  }
  
  function onoff() {
  
    currentvalue = document.getElementById("timeon").value;
    if (currentvalue == "time off") {
      document.getElementById("timeon").value = "time on";
    } else {
      document.getElementById("timeon").value = "time off";
    }
  }
  
  function ipoff() {
  
    currentvalue = document.getElementById("ipon").value;
    if (currentvalue == "ip off") {
      document.getElementById("ipon").value = "ip on";
    } else {
      document.getElementById("ipon").value = "ip off";
    }
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }
  
  
  
  function watermark() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let username = document.getElementById("username").value;
    let version = document.getElementById("versionPublic").value;
    let adminversion = document.getElementById("versionAdmin").value;
    let adminuser = document.getElementById("adminUser").value;
    let divider = ''
    if (version) {
      divider = ' | '
    }
    username === adminuser ? version = adminversion : version = version;
    let time = ' | ' + h + ':' + m + ':' + s;
    if (document.getElementById("timeon").value === 'time off') {
      time = ''
    }
  
    $.getJSON("https://api.ipify.org?format=json", function(data) {
      document.getElementById("ip").value = ' | ' + data.ip
    })
  
    let ip = document.getElementById("ip").value;
  
    if (document.getElementById("ipon").value === 'ip off') {
      ip = ''
    }
    if (version) {
      version = version
    } else {
      version = ''
    }
    if (username) {
      document.getElementById("splash").innerHTML = username + divider + version + time + ip;
    }
    setTimeout(watermark, 1000); {}
  }
  
  function onoff() {
  
    currentvalue = document.getElementById("timeon").value;
    if (currentvalue == "time off") {
      document.getElementById("timeon").value = "time on";
    } else {
      document.getElementById("timeon").value = "time off";
    }
  }
  
  function ipoff() {
  
    currentvalue = document.getElementById("ipon").value;
    if (currentvalue == "ip off") {
      document.getElementById("ipon").value = "ip on";
    } else {
      document.getElementById("ipon").value = "ip off";
    }
  }
  