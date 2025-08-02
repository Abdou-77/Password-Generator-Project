const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne=document.querySelector("#password-1");
let passwordTwo=document.querySelector("#password-2");
let pass1=[];
let pass2=[];
function generate() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    for (let i =0;i<=15;i++){
        pass1[i]=characters[Math.floor(Math.random()*characters.length)];
        pass2[i]=characters[Math.floor(Math.random()*characters.length)];
    }
    for(let i=0;i<=15;i++){
        passwordOne.textContent+=pass1[i];
        passwordTwo.textContent+=pass2[i];
    }
}

// Copy to clipboard functionality
document.addEventListener('DOMContentLoaded', function() {
    const resultElements = document.querySelectorAll('.result');
    
    resultElements.forEach(function(element) {
        element.addEventListener('click', function() {
            if (element.textContent.trim()) {
                // Try modern clipboard API first
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(element.textContent).then(function() {
                        showCopyFeedback(element);
                    }).catch(function(err) {
                        console.error('Failed to copy: ', err);
                    });
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = element.textContent;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    showCopyFeedback(element);
                }
            }
        });
    });
});

function showCopyFeedback(element) {
    const originalBg = element.style.backgroundColor;
    const originalText = element.textContent;
    
    // Change appearance to show it was copied
    element.style.backgroundColor = '#059669';
    element.textContent = 'Copied!';
    
    // Reset after 1 second
    setTimeout(function() {
        element.style.backgroundColor = originalBg || '#273549';
        element.textContent = originalText;
    }, 1000);
}   