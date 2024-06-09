function addRotateButton() {
    if (document.body) {
        const rotateButton = document.createElement("button");

        rotateButton.textContent = "Rotate Web Page";
        rotateButton.style.position = "fixed";
        rotateButton.style.top = "20px";
        rotateButton.style.right = "20px";
        rotateButton.style.zIndex = "2147483647";
        rotateButton.style.padding = "15px";
        rotateButton.style.width = "100px";
        rotateButton.style.height = "100px";
        rotateButton.style.fontSize = "16px";
        rotateButton.style.border = "none";
        rotateButton.style.borderRadius = "50%";
        rotateButton.style.cursor = "pointer";
        rotateButton.style.backgroundColor = "#000";
        rotateButton.style.color = "#FFF";
        rotateButton.style.border = "2px solid #FFF";

        document.body.insertBefore(rotateButton, document.body.firstChild);

        const rotateTarget = document.documentElement;
        let isRotated = false;

        rotateButton.addEventListener("click", function () {
            rotateTarget.style.transition = "transform 0.5s";
            rotateTarget.style.transform = isRotated ? "rotate(0deg)" : "rotate(180deg)";
            isRotated = !isRotated;
        });
    } else {
        requestAnimationFrame(addRotateButton);
    }
}

addRotateButton();