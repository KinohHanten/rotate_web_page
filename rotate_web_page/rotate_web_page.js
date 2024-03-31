// function addRotateButton() {
//     if (document.body) {
//         const rotateButton = document.createElement("button");

//         rotateButton.textContent = "Rotate Web Page";
//         rotateButton.style.position = "fixed";
//         rotateButton.style.top = "20px";
//         rotateButton.style.right = "20px";
//         rotateButton.style.zIndex = "2147483647";
//         rotateButton.style.padding = "10px 20px";
//         rotateButton.style.fontSize = "16px";
//         rotateButton.style.border = "none";
//         rotateButton.style.borderRadius = "5px";
//         rotateButton.style.cursor = "pointer";
//         rotateButton.style.backgroundColor = "#007BFF";
//         rotateButton.style.color = "white";

//         document.body.insertBefore(rotateButton, document.body.firstChild);

//         const rotateTarget = document.documentElement;
//         let isRotated = false;

//         rotateButton.addEventListener("click", function () {
//             rotateTarget.style.transition = "transform 0.5s";
//             rotateTarget.style.transform = isRotated ? "rotate(0deg)" : "rotate(180deg)";
//             isRotated = !isRotated;
//         });
//     } else {
//         requestAnimationFrame(addRotateButton);
//     }
// }

// addRotateButton();

function addRotateButton() {
    if (document.body) {
        const rotateButton = document.createElement("button");

        rotateButton.textContent = "Rotate Web Page";
        rotateButton.style.position = "fixed";
        rotateButton.style.top = "20px";
        rotateButton.style.right = "20px";
        rotateButton.style.zIndex = "2147483647";
        rotateButton.style.padding = "15px"; // paddingを均等に
        rotateButton.style.width = "100px"; // 幅を設定
        rotateButton.style.height = "100px"; // 高さを設定（幅と同じにして円形に）
        rotateButton.style.fontSize = "16px";
        rotateButton.style.border = "none";
        rotateButton.style.borderRadius = "50%"; // この値を変更して円形に
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
