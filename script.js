const Facilities = [
    {
        title: "Medical Check Up",
        info: "Experience peace of mind with our Medical Check-Up Department. We offer comprehensive health evaluations, ensuring you're in the best shape possible. Our skilled professionals provide thorough physical examinations and health assessments to keep you on the path to wellness."
    },
    {
        title: "Dental Specialist Clinic",
        info: "Smile with confidence at our Dental Specialist Clinic. Our dedicated team of dentists and specialists is committed to preserving your dental health. From routine check-ups to advanced treatments, we provide expert care to keep your smile shining brightly."
    },
    {
        title: "Laboraotry",
        info: "Uncover the power of precision with our Laboratory Department. We're the scientific heart of your healthcare journey, providing precise and timely medical testing. From blood samples to tissue analysis and get your results quickly, our lab experts deliver results you can trust."
    },
    {
        title: "Pharmacy",
        info: "Convenience meets care in our Pharmacy. Your health and well-being are our top priorities. We offer a wide range of medications and personalized advice from our experienced pharmacists, making sure you have the right remedies right when you need them."
    },
    {
        title: "Radiology",
        info: "Discover the future of diagnostics with our Radiology Department. Cutting-edge technology, including X-rays, CT scans, and MRI imaging, allows us to unveil the mysteries inside your body. Our team of experts ensures accurate and swift diagnoses for your peace of mind."
    },
];
const heading = document.getElementById("serviceHeading");
const info = document.getElementById("serviceInformation");
function func1() {
    heading.innerHTML = Facilities[0].title;
    info.innerHTML = Facilities[0].info;
}
function func2() {
    heading.innerHTML = Facilities[1].title;
    info.innerHTML = Facilities[1].info;
}
function func3() {
    heading.innerHTML = Facilities[2].title;
    info.innerHTML = Facilities[2].info;
}
function func4() {
    heading.innerHTML = Facilities[3].title;
    info.innerHTML = Facilities[3].info;
}
function func5() {
    heading.innerHTML = Facilities[4].title;
    info.innerHTML = Facilities[4].info;
}
