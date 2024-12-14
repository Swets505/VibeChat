var load_delay = 6000; //1 second

setTimeout(function load_start() {
    document.getElementById('bg').style.background = "#121212";
    document.getElementById('loading_aria').style.display = "none";
    document.getElementById('startup_box_left').style.display = "block";
    document.getElementById('startup_box_right').style.display = "block";
    document.getElementById('startup_title_main').style.display = "inline-block";
    document.getElementById('startup_extra_main').style.display = "inline-block";
}, load_delay);

//abrie is n foken dom poes
