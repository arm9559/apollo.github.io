
function slider(){
    let textObjects = [
        "Backend Engineer",
        "Frontend Engineer",
        "Project Manager",
        "Product Designer",
        "Finance Director"
    ]

    let paragraphObjects = [
        "Backend (English back-end) - the software and hardware part of the service, which is responsible for the functioning of its internal part. Front- and back-end is a variant of software architecture.",
        "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.",
        "A project manager is a professional in the field of project management. Project managers have the responsibility of the planning, procurement and execution of a project,",
        "Product design as a verb is to create a new product to be sold by a business to its customers.[1] A very broad coefficient and effective generation and development of ideas through a process that leads to new products.[2] Thus, it is a major aspect of new product development.",
        "CFO is a director, one of the highest administrative positions, widely used in many countries of the world in government, commercial or non-profit organizations. Its main functions are financial flow and risk management, financial planning and reporting. He determines the financial policy of the organization, develops and implements measures to ensure its financial stability."
    ]

    let num = 0

    let getSliderHeading = document.querySelector(".slider-heading")
    let getSliderParagraph = document.querySelector(".slider-paragraph")
        let getNextButton = document.querySelector(".nextSlider").addEventListener("click",nextSlider)

        function nextSlider(){
            num++
            if(num>=textObjects.length){
                num = 0
            }
                getSliderHeading.innerText = textObjects[num]
                getSliderParagraph.innerText = paragraphObjects[num]
        }
        nextSlider()

        setInterval(nextSlider,3000)
        let getPrevButton = document.querySelector(".prevSlider").addEventListener("click",()=>{
            num--
            if(num < 0){
                num = textObjects.length-1
            }
                getSliderHeading.innerText = textObjects[num]
                getSliderParagraph.innerText = paragraphObjects[num]

        })
   
}
slider()


