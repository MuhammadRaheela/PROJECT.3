// click_to_convert.addEventListener('click', function () {
//     var speech = true
//     window.SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();

//     recognition.addEventListener("result", e => {
//         const transcript = Array.from(e.result)
//             .map(result => result[0])
//             .map(result => result.transcript);

//         convert_text.innerHTML = transcript;
//     })

//     if (speech == true) {
//         recognition.start()
//     }
// })



click_to_convert.addEventListener('click', function () {
    var speech = true;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)  // Fixed from e.result to e.results
            .map(result => result[0])
            .map(result => result.transcript)
        // .join(' ');  // Join the transcripts to form a complete sentence

        convert_text.innerHTML = transcript;
    });

    // recognition.addEventListener("end", () => {
    //     if (speech) {
    //         recognition.start(); // Restart recognition when it ends
    //     }
    // });

    // recognition.addEventListener("error", (event) => {
    //     console.error("Speech recognition error:", event.error);
    // });
    if (speech == true) {
        recognition.start()
    }
})
