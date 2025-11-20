 let ipr = document.getElementsByTagName("input")[0];
    let s = "";
    function fun(ch) {
      if (ch === "ac") {
        s = "";
        ipr.value = "";
      } else if (ch === "del") {
        s = s.slice(0, -1);
        ipr.value = s;
      } else if (ch === "=") {
        try {
          ipr.value = eval(s);
          s = "";
        } catch {
          ipr.value = "Error";
          s = "";
        }
      } else {
        s += ch;
        ipr.value = s;
      }
    }