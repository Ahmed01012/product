function playV() {
    let video = document.getElementById("mvideo");
    if(video.paused){
        video.play();
    }
    else{
        video.pause()
    }
}



document.getElementById("fullyear").innerHTML=new Date().getFullYear();


// Example starter JavaScript for disabling form submissions if there are invalid fields
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
});