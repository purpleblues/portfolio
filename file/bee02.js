window.sr = ScrollReveal();
sr.reveal(".foo");
sr.reveal(".bar");

// as a DOM node...
var fooContainer = document.getElementById("fooContainer");
sr.reveal(".foo", { container: fooContainer });

// as a selector...
sr.reveal(".bar", { container: "#barContainer" });

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal(".foo", { duration: 200 });

window.sr = ScrollReveal({ duration: 2000 });
sr.reveal(".foo", 50);
