window.addEventListener("load", function () {
    document.getElementById('hello').style.display = "block";
    setTimeout(function () {
        document.getElementById('hello').style.display = "none";
        document.getElementById('kumusta').style.display = "block";

        setTimeout(function () {
            document.getElementById('kumusta').style.display = "none";
            document.getElementById('page').style.display = "block";
            document.getElementById('pageloader').style.display = "none";
        }, 800);
    }, 800);
});